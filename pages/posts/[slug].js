import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import ExampleComponent from '../../components/ExampleComponent'

const components = { ExampleComponent }

export default function Post({ source, frontmatter }) {
  return (
    <>
      <div>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...source} components={components} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), `_posts/${params.slug}.mdx`)
  const fileContents = fs.readFileSync(filePath)
  const { content, data } = matter(fileContents)
  const mdxSource = await serialize(content)
  return { props: { source: mdxSource, frontmatter: data } }
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), '_posts'))
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
    .map((slug) => ({ params: { slug: slug } }))
  return {
    paths: paths,
    fallback: false,
  }
}
