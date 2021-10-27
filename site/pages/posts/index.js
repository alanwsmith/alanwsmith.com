import Link from 'next/link'

import { getAllPosts } from '../../lib/api'

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>This is it{' '}
      {posts.map((post) => {
        return (
          <div key={post.permalink}>
            <Link href={post.permalink}>
              <a>{post.title}</a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  }
}
