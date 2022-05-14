#!/usr/bin/env python3

import os
import re
import yaml

from list_dir import list_dir

source_dir = '/Users/alan/Library/Mobile Documents/com~apple~CloudDocs/Grimoire'
output_dir = 'output'


def update_yaml(data, file_name):
    file_name_parts = file_name.split('-')
    data['title'] = '-'.join(file_name_parts[1:]).strip()
    return data

file_list = list_dir(root_dir=source_dir)
for file in file_list:
    if file['extension'] == 'txt':
        if file['sub_dir'] == '':
            source_path = file['full_path']
            # print(file_path)
            with open(source_path) as _in:
                full_file = _in.read()
                file_parts = full_file.split('---')
                if len(file_parts) > 2:
                    if re.search(r'id: ', file_parts[1]):
                        if not re.search(r'title: ', file_parts[1]):
                            print(source_path)
                            output_path = os.path.join(output_dir, file['name_with_extension'])
                            print(output_path)
                            yaml_data = yaml.load(file_parts[1], Loader=yaml.FullLoader)
                            updated_yaml_data = update_yaml(
                                yaml_data,
                                file['name_without_extension']
                            )
                            file_parts[1] = yaml.dump(updated_yaml_data, Dumper=yaml.Dumper)
                            file_parts[1] = f"\n{file_parts[1]}"

                            print(updated_yaml_data)
                            with open(output_path, 'w') as _out:
                                _out.write('---'.join(file_parts))


