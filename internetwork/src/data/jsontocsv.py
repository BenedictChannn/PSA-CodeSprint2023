import csv
import json

# Replace 'input.json' with the path to your JSON file or use a JSON string.
json_file = "users.json"

# Parse the JSON data
with open(json_file, 'r') as json_file:
    data = json.load(json_file)

# Define the CSV file path where you want to save the data
csv_file = './output.csv'

# Write the JSON data to the CSV file
with open(csv_file, 'w', newline='') as csvfile:
    fieldnames = data[0].keys()
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    # Write the header
    writer.writeheader()

    # Write the data rows
    for row in data:
        writer.writerow(row)

print(
    f"JSON data has been successfully converted to CSV and saved to {csv_file}.")
