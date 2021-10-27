import { getAllPosts, getPostBySlug } from '../../lib/api'
import Head from 'next/head'

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
      <div className="post">
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
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
