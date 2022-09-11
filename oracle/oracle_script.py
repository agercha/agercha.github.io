import os
directory = 'oracle_pics'
 
# iterate over files in
# that directory
for filename in os.listdir(directory):
    if filename != ".DS_Store":
        print(f"\"oracle_pics/{filename}\",")