import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import LayoutMain from '../components/LayoutMain'

export default function BlogList({ posts }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="alanwsmith.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:creator" content="@theidofalan" />
        <meta
          property="og:description"
          content="The personal website of Alan W. Smith"
        />
        <meta property="og:url" content={`https://www.alanwsmith.com`} />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/awsimages/image/upload/c_fit,l_text:Arial_68_bold:TheSiteOfAlan,w_720/fl_layer_apply,g_north_west,x_480,y_68/og-image-v3_eka6dz.png`}
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
                  <li key={index} className="pb-0">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
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
