#!/usr/bin/env python3

from os import listdir


number_to_bump = 8

source_dir = 'designs'
dir_list = [int(d) for d in listdir(source_dir) if d[0] != '.']
dir_list.sort()

for num in range(len(dir_list), -1, -1):
    if num == number_to_bump:
        break
    print(num)

