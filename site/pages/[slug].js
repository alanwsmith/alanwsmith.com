import { getAllPosts, getPostBySlug } from '../lib/api'
import Head from 'next/head'
import LayoutMain from '../components/LayoutMain.js'

export default function Post({ post }) {
  return (
    <>
      <Head>
        <meta
          name="og:image"
          content={`https://res.cloudinary.com/awsimages/image/upload/c_fit,l_text:Arial_68_bold:${encodeURIComponent(
            post.title
          )},w_720/fl_layer_apply,g_north_west,x_480,y_68/og-image-v3_eka6dz.png`}
        />
      </Head>
      <LayoutMain
        content={
          <div className="max-w-prose">
            <h3 className="text-blue-600 text-3xl pb-3">{post.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        }
      />
    </>
  )
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    props: {
      post,
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}
