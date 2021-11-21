import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../utils/mdx'
import Head from 'next/head'
import LayoutMain from '../../components/LayoutMain.js'
import HeaderDate from '../../components/HeaderDate.js'
import VimeoVideo from '../../components/VimeoVideo.js'
import YouTubeVideo from '../../components/YouTubeVideo.js'
import ReadOnlyChecklist from '../../components/ReadOnlyChecklist'

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
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
              <Component
                components={{
                  ReadOnlyChecklist: ReadOnlyChecklist,
                  VimeoVideo: VimeoVideo,
                  YouTubeVideo: YouTubeVideo,
                }}
              />
            </div>
          </div>
        }
      />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export default Post
