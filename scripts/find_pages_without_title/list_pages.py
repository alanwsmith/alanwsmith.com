#!/usr/bin/env python3

import re

from list_dir import list_dir

source_path = '/Users/alan/Library/Mobile Documents/com~apple~CloudDocs/Grimoire'

file_list = list_dir(root_dir=source_path)

for file in file_list:
    if file['extension'] == 'txt':
        if file['sub_dir'] == '':
            file_path = file['full_path']
            # print(file_path)

            with open(file_path) as _in:
                full_file = _in.read()
                file_parts = full_file.split('---')
                if len(file_parts) > 2:
                    if re.search(r'id: ', file_parts[1]):
                        if not re.search(r'title: ', file_parts[1]):
                            print(file_path)




