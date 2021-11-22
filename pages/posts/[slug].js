import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

const CONTENT_DIR = '_posts'

import ExampleComponent from '../../components/ExampleComponent'
import Checklist from '../../components/Checklist'

export default function Post({ source, frontmatter }) {
  return (
    <>
      <div>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...source} components={{ ExampleComponent, Checklist }} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { content, data } = matter(
    fs.readFileSync(path.join(CONTENT_DIR, `${params.slug}.mdx`))
  )
  const mdxSource = await serialize(content)
  return { props: { source: mdxSource, frontmatter: data } }
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(CONTENT_DIR)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
    .map((slug) => ({ params: { slug: slug } }))
  return {
    paths: paths,
    fallback: false,
  }
}
