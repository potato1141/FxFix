import os

# Path to the folder you want to scan
folder_path = "./"  # current folder, change if needed

# List to hold filenames
otf_files = []

# Iterate through files in the folder
for filename in os.listdir(folder_path):
    if filename.lower().endswith(".otf"):
        otf_files.append(filename)

# Join the filenames with commas
output = ",".join(otf_files) + ","  # adds trailing comma

print(output)
