import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import LayoutMain from '../components/LayoutMain.js'

import { getAllPosts } from '../lib/api'

export default function Posts({ posts }) {
  return (
    <LayoutMain
      content={
        <>
          <p className="pb-4">
            Hey, folks. I&apos;m Alan. Welcome to my site. I&apos;m in the
            process of moving it. So, a bunch of stuff is broken. That&apos;s
            all part of the idea of building in public. I&apos;ll make progress
            over time. For now, here&apos; an alphabetical list of posts on the
            site.
          </p>
          <div className="pt-4 border-t border-gray-400">
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
        </>
      }
    />
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  }
}
