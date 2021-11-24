import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Link from 'next/link'

const CONTENT_DIR = path.join(process.cwd(), '_posts')

import Checklist from '../../components/Checklist'
import HeaderDate from '../../components/HeaderDate'
import LayoutMain from '../../components/LayoutMain'
import ReadOnlyChecklist from '../../components/ReadOnlyChecklist'
import YouTubeVideo from '../../components/YouTubeVideo'
import VimeoVideo from '../../components/VimeoVideo'

export default function Post({ source, frontmatter }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:type" content="article" />
        <meta name="twitter:creator" content="@theidofalan" />
        <meta property="og:description" content="A post from Alan W. Smith" />
        <meta
          property="og:url"
          content={`https://www.alanwsmith.com${frontmatter.slug}`}
        />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/awsimages/image/upload/c_fit,l_text:Arial_68_bold:${encodeURIComponent(
            frontmatter.title
          )},w_720/fl_layer_apply,g_north_west,x_480,y_68/og-image-v3_eka6dz.png`}
        />
      </Head>
      <LayoutMain
        content={
          <div className="max-w-prose">
            <h1 className="text-blue-300 text-3xl ">{frontmatter.title}</h1>
            <div
              className="
              border-b 
              border-gray-400 
              text-gray-600 
              text-xs 
              pb-4
              mb-4"
            >
              <div className="pt-1">
                <HeaderDate date={frontmatter.date} />
              </div>
            </div>
            <div className="text-blue-200">
              <MDXRemote
                {...source}
                components={{
                  Checklist,
                  ReadOnlyChecklist,
                  YouTubeVideo,
                  VimeoVideo,
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
