import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const filenames = fs.readdirSync(postsDirectory)
  return filenames.map((filename) => {
    const file = fs.readFileSync(
      path.join(process.cwd(), '_posts', filename),
      'utf8'
    )
    const { data } = matter(file)
    const slug = filename.replace(/\.md$/, '').replace(/\.mdx$/, '')
    return {
      ...data,
      slug,
      permalink: `/${slug}`,
    }
  })
}

export function getPostBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), '_posts', `${slug}.mdx`),
    'utf8'
  )
  const { content, data } = matter(file)
  const body = remark().use(html).processSync(content).toString()
  // const body = content
  return {
    ...data,
    body,
  }
}
