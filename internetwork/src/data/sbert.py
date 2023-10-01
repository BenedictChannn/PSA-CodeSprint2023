from sentence_transformers import SentenceTransformer, util
import pandas as pd
import json
import ast
import sys
with open('PSA-CodeSprint2023/internetwork/src/data/users.json', 'r') as json_file:
    data = json.load(json_file)

input = ast.literal_eval(sys.argv[1])

name = input['name']

# Load a pretrained SBERT model
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# Sample employee data (you should load your own dataset)
# data = {
#     'Name': ['Employee1', 'Employee2', 'Employee3', 'Employee4', 'Employee5'],
#     'Role': ['Staff', 'Engineer', 'Inspector', 'Coordinator', 'Analyst'],
#     'Department': ['Operations', 'Engineering', 'Safety', 'Logistics', 'Operations'],
#     'Skillsets': ['communication', 'coding, problem-solving', 'safety-compliance', 'logistics-management', 'financial-analysis, communication, leadership']
# }

# # Create a DataFrame from the sample data
# employee_df = pd.DataFrame(data)

employee_df = pd.read_csv(
    "PSA-CodeSprint2023/internetwork/src/data/output.csv")
# Define the attributes of the employee who is leaving

leaving_employee = None

for person in data:
    if person["name"] == name:
        leaving_employee = person
        break

# Calculate SBERT embeddings for all employees
employee_embeddings = model.encode(employee_df['skills'] + ' ' + employee_df['department'] + ' ' +
                                   employee_df['jobRole'] + ' ' + employee_df['priorExp'] + ' ' + employee_df['projects'], convert_to_tensor=True)
# Convert list elements to strings and join them
leaving_employee_embedding = model.encode(
    ' '.join(map(str, leaving_employee['skills'])) + ' ' +
    ' '.join(map(str, leaving_employee['department'])) + ' ' +
    ' '.join(map(str, leaving_employee['jobRole'])) + ' ' +
    ' '.join(map(str, leaving_employee['priorExp'])) + ' ' +
    ' '.join(map(str, leaving_employee['projects'])),
    convert_to_tensor=True
)

# Calculate cosine similarity scores between the leaving employee and all others
cosine_scores = util.pytorch_cos_sim(
    leaving_employee_embedding, employee_embeddings)

sorted_indices = cosine_scores.argsort(descending=True)

# Convert the PyTorch tensor to a NumPy array and flatten it
sorted_indices = sorted_indices.cpu().numpy().flatten()

# Get the names of the top three most suitable replacement employees
top_three_replacements = []
for i in range(3):
    top_three_replacements.append(
        employee_df.iloc[sorted_indices[i + 1]]['name'])
top_three_replacements_skills = employee_df.iloc[sorted_indices][1:4]['skills']

leaving_employee_skills = set(leaving_employee['skills'])
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

# print(
#     f"The top three most suitable replacements for {leaving_employee['name']} are:")
# for i, replacement in enumerate(top_three_replacements, 1):
#     print(f"{i}. {replacement} - {top_three_no_skills[i - 1]}")


# # Get the name of the most suitable replacement employee
# suitable_replacement = employee_df.iloc[sorted_indices][1:2]['name'].iloc[0]
# skills_replacement = top_three_no_skills[0]


# print(
#     f"The most suitable replacement for {leaving_employee['name']} is {suitable_replacement}.")
# print(
#     f"To prepare {suitable_replacement} for the position of {leaving_employee['jobRole']}: {skills_replacement} are courses they should pick up!")


output = input
output['topThreeReplacements'] = top_three_replacements

print(json.dumps(output))

# print(leaving_employee['name'])
# print(top_three_replacements)

sys.stdout.flush()
