import os
import glob

def list_dir(*, root_dir, sub_dir=''):
    return_value = []
    root_dir_full = os.path.realpath(os.path.join(root_dir))
    dir_to_process = os.path.join(root_dir_full, sub_dir)

    file_list = [
        file for file in glob.glob(
            f"{dir_to_process}/*"
        )
        if os.path.isfile(file)
    ]

    for file in file_list:
        name_with_extension = os.path.basename(file)
        name_without_extension = os.path.splitext(name_with_extension)[0]
        extension = os.path.splitext(name_with_extension)[1].replace('.', '')

        return_value.append(
            {
                "root_dir": root_dir_full,
                "sub_dir": sub_dir,
                "name_with_extension": name_with_extension,
                "name_without_extension": name_without_extension,
                "extension": extension,
                "full_path": file
            }
        )

    sub_dir_list = [
        directory for directory in glob.glob(
            f"{dir_to_process}/*"
        )
        if os.path.isdir(directory)
    ]

    for sub_dir_full_path in sub_dir_list:
        base_sub_dir = sub_dir_full_path.replace(f'{root_dir_full}/', '')
        tmp_list = list_dir(root_dir=root_dir_full, sub_dir=base_sub_dir)
        for item in tmp_list:
            return_value.append(item)

    return return_value
