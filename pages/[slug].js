import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../utils/mdx'
import Head from 'next/head'
import LayoutMain from '../components/LayoutMain.js'

const VimeoVideo = ({ id }) => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: '0',
          overflow: 'hidden',
          maxWidth: '100%',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          src={`https://player.vimeo.com/video/${id}`}
          frameborder="0"
          webkitAllowFullScreen
          mozAllowFullscreen
          allowFullScreen
        />
      </div>
    </>
  )
}

const YouTubeVideo = ({ id }) => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: '0',
          overflow: 'hidden',
          maxWidth: '100%',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/S_inYj3J0h8?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  )
}

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <Head>
        <meta
          name="og:image"
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
              {frontmatter.date}
            </div>
            <div className="text-blue-200">
              <Component
                components={{
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
