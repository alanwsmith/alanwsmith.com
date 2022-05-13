#!/usr/bin/env python3

import os
import shutil

number_to_bump = 4

source_dir = 'designs'
dir_list = [int(d) for d in os.listdir(source_dir) if d[0] != '.']
dir_list.sort()

# move the directories forward one
for num in range(len(dir_list), number_to_bump, -1):
    original_path = f"{source_dir}/{str(num)}"
    dest_path = f"{source_dir}/{str(num + 1)}"
    print("Rename: ")
    print(original_path)
    print(dest_path)
    os.rename(original_path, dest_path)



dir_to_copy = f"{source_dir}/{number_to_bump}"
dir_to_paste = f"{source_dir}/{number_to_bump + 1}"
shutil.copytree(dir_to_copy, dir_to_paste)

print(dir_to_copy)
print(dir_to_paste)
