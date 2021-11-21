import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const POSTS_PATH = path.join(process.cwd(), 'data/_posts')

export const getSourceOfFile = (fileName) => {
  console.log(`-- getSourceOfFile: ${fileName}`)
  const fullFilePath = path.join(POSTS_PATH, fileName)
  console.log(`-- Full path: ${fullFilePath}`)
  const theData = fs.readFileSync(fullFilePath, 'utf8')
  // console.log(theData)
  return theData
}

export const getAllPosts = () => {
  console.log('-- getAllPosts')
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName)
      const slug = fileName.replace(/\.mdx?$/, '')
      const { data } = matter(source)
      const title = data.title
      return {
        title: title,
        slug: slug,
      }
    })
}

export const getSinglePost = async (slug) => {
  console.log(`-- getSinglePost: ${slug}`)
  const fileSource = getSourceOfFile(slug + '.mdx')

  const result = await bundleMDX({
    source: fileSource,
  })
  const { code, frontmatter } = result

  return {
    frontmatter,
    code,
  }
}
