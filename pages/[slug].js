import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../utils/mdx'
import Head from 'next/head'
import LayoutMain from '../components/LayoutMain.js'

// <div style="padding:75.4% 0 0 0;position:relative;">
//
// style="position:absolute;top:0;left:0;width:100%;height:100%;"
//
// <style>.embed-container
// { position: relative; padding-bottom: 56.25%;
// height: 0; overflow: hidden; max-width: 100%; }
// .embed-container iframe, .embed-container object,
// .embed-container embed {
// position: absolute; top: 0; left: 0;
// width: 100%; height: 100%; }
// </style>
// <div class='embed-container'>
// <iframe src='https://player.vimeo.com/video/66140585' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

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
          src="https://player.vimeo.com/video/66140585"
          frameborder="0"
          webkitAllowFullScreen
          mozAllowFullscreen
          allowFullScreen
        />
      </div>
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
      <div style={{ padding: '75.4 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/3817271?h=7ec54b53c7&title=0&byline=0&portrait=0"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%;',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
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
            <h3 className="text-blue-300 text-3xl ">{frontmatter.title}</h3>
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
              <Component components={{ VimeoVideo: VimeoVideo }} />
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
