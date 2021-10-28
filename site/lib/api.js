import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
// import { bundlerMDX } from 'mdx-bundler'

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

export async function getPostBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), '_posts', `${slug}.mdx`),
    'utf8'
  )
  const { content, data } = matter(file)
  const mdxSource = await serialize(content)
  return {
    mdxSource,
    data,
  }
}

export async function getPostBySlug2(slug) {
  const source = fs.readFileSync(
    path.join(process.cwd(), '_posts', `${slug}.mdx`),
    'utf8'
  )
  const { code, frontmatter } = await bunleMDX(source)
  return {
    frontmatter,
    code,
  }
}
