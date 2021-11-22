import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function HomePage({ posts }) {
  return (
    <>
      <h1>This is the home page</h1>
      <p>Stuff broke... I fix</p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), '_posts')

  const posts = fs
    .readdirSync(contentDir)
    .filter((filePath) => /\.mdx?$/.test(filePath))
    .map((filePath) => {
      const slug = filePath.replace(/\.mdx$/, '')
      const { content, data } = matter(
        fs.readFileSync(path.join(contentDir, filePath))
      )
      return {
        title: data.title,
        slug: slug,
      }
    })

  return {
    props: {
      posts: posts,
    },
  }
}
