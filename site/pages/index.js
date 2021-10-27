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
        <div>
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
