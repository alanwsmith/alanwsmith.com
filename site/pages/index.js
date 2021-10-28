import Link from 'next/link'
import { getAllPosts } from '../utils/mdx'
import LayoutMain from '../components/LayoutMain.js'
import Head from 'next/head'

export default function BlogList({ posts }) {
  return (
    <>
      <Head>
        <meta
          name="og:image"
          content={`https://res.cloudinary.com/awsimages/image/upload/c_fit,l_text:Arial_68_bold:TheWebsiteOfAlan,w_720/fl_layer_apply,g_north_west,x_480,y_68/og-image-v3_eka6dz.png`}
        />
      </Head>
      <LayoutMain
        content={
          <>
            <p className="pb-4 text-blue-200 max-w-prose">
              Hey, folks. I&apos;m Alan. Welcome to my site. I&apos;m in the
              process of moving it. So, a bunch of stuff is broken. That&apos;s
              all part of the idea of building in public. I&apos;ll make
              progress over time. For now, here&apos; an alphabetical list of
              posts on the site.
            </p>
            <div className="max-w-prose pt-4 border-t border-gray-400 text-blue-200">
              <ul>
                {posts.map((post, index) => (
                  <li key={index}>
                    <Link href={`${post.slug}`}>{post.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        }
      />
    </>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}
