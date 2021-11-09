import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const POSTS_PATH = path.join(process.cwd(), '_posts')

export const getSourceOfFile = (fileName) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName))
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName)
      const fileId = fileName.replace(/\.mdx?$/, '')
      //
      const { data } = matter(source)

      // Still need this since it's passed back.
      // Check to see if that still needs to happen.
      // Probalby does.
      const title = data.title

      // TODO: make a scrubbed version of the title
      // hard coding for now
      const scrubbedTitle = 'some-new-file-title'

      // TODO: Pull the actual frontmatter title
      // after scrubbing it
      // const slug = `${fileId}-${scrubbedTitle}`
      const slug = fileId

      // TODO: Figure out what to do if title is undefined
      // if (title === undefined) {
      //   console.log(fileName)
      //   console.log(title)
      // }

      // console.log(`Returning: ${slug}`)
      // console.log(`  with title: ${title}`)

      return {
        title: title,
        slug: slug,
      }
    })
}

export const getSinglePost = async (slug) => {
  console.log(`getSinglePost - ${slug}`)
  return {}

  /*
  const slug_parts = slug.split('/')
  console.log(`Looking for: ${slug_parts[0]}`)
  const source = getSourceOfFile(slug_parts[0] + '.mdx')

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  })
  return {
    frontmatter,
    code,
  }
  */
}
