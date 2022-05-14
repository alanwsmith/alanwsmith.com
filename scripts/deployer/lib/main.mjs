import fs from 'fs'

const main = () => {
  // TODO: Only process files that have an ID in the yaml front matter
  const file_data = fs.readFileSync(
    'test/_input/samples_a/py- Some Thing - Here.txt',
    'utf-8'
  )
  console.log(file_data)

  fs.writeFileSync(
    'test/_output/a/posts/do-something-in-python--29ajjouaaaaa.mdx',
    'data'
  )
  console.log('HERE')
}

export default main
