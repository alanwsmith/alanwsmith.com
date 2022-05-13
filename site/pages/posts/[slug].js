import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Link from 'next/link'
import capitalize from 'capitalize'

const CONTENT_DIR = path.join(process.cwd(), '_posts')

import Checklist from '../../components/Checklist'
import HeaderDate from '../../components/HeaderDate'
import Img from '../../components/Img'
import LayoutMain from '../../components/LayoutMain'
import PodcastLinks from '../../components/PodcastLinks'
import PodcastPlayer from '../../components/PodcastPlayer'
import ReadOnlyChecklist from '../../components/ReadOnlyChecklist'
import YouTubeVideo from '../../components/YouTubeVideo'
import VimeoVideo from '../../components/VimeoVideo'

export default function Post({ source, frontmatter }) {
  // If you want to add skip words that aren't capitalzied,
  // change this to
  // const capitalizeOptions = { skipWord: /^(a|the|an|and|or|but|in|on|of|it)$/ }
  const capitalizeOptions = {}
  const capitalizedTitle = capitalize.words(frontmatter.title)
  return (
    <>
      <Head>
        <meta property="og:title" content={capitalizedTitle} />
        <meta property="og:type" content="article" />
        <meta name="twitter:creator" content="@theidofalan" />
        <meta property="og:description" content="A post from Alan W. Smith" />
        <meta
          property="og:url"
          content={`https://www.alanwsmith.com${frontmatter.slug}`}
        />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/awsimages/image/upload/w_1200,h_630/c_fit,l_text:Arial_68_bold:${encodeURIComponent(
            capitalizedTitle
          )},w_720/fl_layer_apply,g_north_west,x_480,y_68/og-image-v3_eka6dz.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <LayoutMain
        content={
          <div className="max-w-prose">
            <div
              className="
              border-b
              border-gray-600 
              text-gray-600 
              text-xs 
              pb-2
              mb-4"
            >
              <h1 className="text-blue-300 text-3xl pt-6">
                {capitalizedTitle}
              </h1>
              <div className="pt-1">
                <HeaderDate date={frontmatter.date} />
              </div>
            </div>
            <div className="text-blue-200 pr-14">
              <MDXRemote
                {...source}
                components={{
                  Link,
                  Checklist,
                  Img,
                  PodcastLinks,
                  PodcastPlayer,
                  ReadOnlyChecklist,
                  YouTubeVideo,
                  VimeoVideo,
                  pre: (props) => (
                    <pre className="line-numbers">{props.children}</pre>
                  ),
                }}
              />
            </div>
          </div>
        }
      />
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
