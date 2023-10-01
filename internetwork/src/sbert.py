from sentence_transformers import SentenceTransformer, util
import pandas as pd
import json
from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route('/run_sbert', methods=['POST'])
def run_sbert():
    try:
        data_from_js = request.json
        print("in receive data")
        # Process the data in Python
        print(data_from_js)

        name, skills, jobRole, department, priorExp = data_from_js
        print(name)
        print(skills)
        print(jobRole)
        print(department)
        print(priorExp)

        # Load a pretrained SBERT model (e.g., 'paraphrase-MiniLM-L6-v2')
        model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

        employee_df = pd.read_csv("output.csv")

        # Define the attributes of the employee who is leaving
        leaving_employee = data_from_js

        # Calculate SBERT embeddings for all employees
        employee_embeddings = model.encode(employee_df['skills'] + ' ' + employee_df['department'] +
                                           ' ' + employee_df['jobRole'] + ' ' + employee_df['priorExp'], convert_to_tensor=True)
        leaving_employee_embedding = model.encode(leaving_employee['Skillsets'] + ' ' + leaving_employee['Department'] +
                                                  ' ' + leaving_employee['Role'] + ' ' + leaving_employee['priorExp'], convert_to_tensor=True)

        # Calculate cosine similarity scores between the leaving employee and all others
        cosine_scores = util.pytorch_cos_sim(
            leaving_employee_embedding, employee_embeddings)

        sorted_indices = cosine_scores.argsort(descending=True)

        # Convert the PyTorch tensor to a NumPy array and flatten it
        sorted_indices = sorted_indices.cpu().numpy().flatten()

        # Get the names of the top three most suitable replacement employees
        top_three_replacements = employee_df.iloc[sorted_indices][1:4]['name']
        top_three_replacements_skills = employee_df.iloc[sorted_indices][1:4]['skills']

        leaving_employee_skills = set(
            leaving_employee['Skillsets'].split(', '))
        top_three_no_skills = []
        for i in range(3):
            skill_list = list(
                top_three_replacements_skills.iloc[i].strip("[]").split(', '))
            for i, skill in enumerate(skill_list):
                skill_list[i] = skill[1:-1]
            skill_set = set(skill_list)
            no_skill = leaving_employee_skills - skill_set
            no_skill_string = ', '.join(no_skill)
            top_three_no_skills.append(no_skill_string)

        print(
            f"The top three most suitable replacements for {leaving_employee['Name']} are:")
        for i, replacement in enumerate(top_three_replacements, 1):
            print(f"{i}. {replacement} - {top_three_no_skills[i - 1]}")

        # Get the name of the most suitable replacement employee
        suitable_replacement = employee_df.iloc[sorted_indices][1:2]['name'].iloc[0]
        skills_replacement = top_three_no_skills

        message = (f"The most suitable replacement for {leaving_employee['Name']} is {suitable_replacement}." +
                   f"To prepare {leaving_employee['Name']} for the position of {leaving_employee['Role']}: {skills_replacement} are courses they should pick up!")

        top_three_replacements_names = []
        for i, replacement in enumerate(top_three_replacements, 0):
            top_three_replacements_names[i] = replacement['name']

        skills_replacement_names = []
        for i, replacement in enumerate(skills_replacement, 0):
            skills_replacement_names[i] = replacement['name']

        response_data = {
            "message": "Data received successfully",
            "replacements": top_three_replacements_names,
            "skills_replacements": skills_replacement_names
        }
        return jsonify(response_data)
    except Exception as e:
        print(e)


if __name__ == '__main__':
    print("In sbert")
    app.run(port=5001)
