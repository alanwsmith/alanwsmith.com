import fs from 'fs'
import path from 'path'

function list_dir({
  rootDir,
  isRecursive = true,
  hiddenFiles = false,
  subDir = '',
  fileListInitial = [],
}) {
  let localFileList = fileListInitial

  if (rootDir.charAt(0) !== '/') {
    rootDir = path.resolve(rootDir)
  }

  const subDirExpanded = path.join(rootDir, subDir)

  let fileNames = fs.readdirSync(subDirExpanded)
  fileNames.forEach((fileName) => {
    let filePath = path.join(subDirExpanded, fileName)
    let subDirPath = path.join(subDir, fileName)
    if (fs.statSync(filePath).isDirectory()) {
      if (isRecursive) {
        localFileList = list_dir({
          rootDir,
          isRecursive,
          hiddenFiles,
          subDirPath,
          localFileList,
        })
      }
    } else {
      let sub_dirs = subDir.split('/')
      if (sub_dirs[0] === '') {
        sub_dirs = []
      }

      let extension = path.parse(fileName).ext
      if (extension !== '') {
        extension = extension.split('.')[1]
      }

      const fileDetails = {
        full_path: path.join(rootDir, path.join(...sub_dirs), fileName),
        initial_root: rootDir,
        sub_dirs: sub_dirs,
        name: fileName,
        name_lower_case: fileName.toLowerCase(),
        name_only: path.parse(fileName).name,
        name_only_lower_case: path.parse(fileName).name.toLowerCase(),
        extension: extension,
        extension_lower_case: extension.toLowerCase(),
      }

      if (hiddenFiles === true) {
        localFileList.push(fileDetails)
      } else if (fileName.charAt(0) !== '.') {
        localFileList.push(fileDetails)
      }
    }
  })

  return localFileList
}

export default list_dir
