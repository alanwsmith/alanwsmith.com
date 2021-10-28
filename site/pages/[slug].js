import { getAllPosts, getPostBySlug } from '../lib/api'
import Head from 'next/head'
import LayoutMain from '../components/LayoutMain.js'
// import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

/*
            <div
              className="text-blue-200"
              dangerouslySetInnerHTML={{ __html: post }}
            />
          */

export default function Post({ frontMatter, mdxSource }) {
  return (
    <>
      <Head>
        <meta
          name="og:image"
          content={`https://res.cloudinary.com/awsimages/image/upload/c_fit,l_text:Arial_68_bold:${encodeURIComponent(
            frontMatter.title
          )},w_720/fl_layer_apply,g_north_west,x_480,y_68/og-image-v3_eka6dz.png`}
        />
      </Head>
      <LayoutMain
        content={
          <div className="max-w-prose">
            <h3 className="text-blue-300 text-3xl ">{frontMatter.title}</h3>
            <div
              className="
              border-b 
              border-gray-400 
              text-gray-600 
              text-xs 
              pb-4
              mb-4"
            >
              {frontMatter.date}
            </div>
            <div className="text-blue-200">
              <MDXRemote {...mdxSource} />
            </div>
          </div>
        }
      />
    </>
  )
}

export async function getStaticProps({ params }) {
  const source = await getPostBySlug(params.slug)
  const mdxSource = source.mdxSource
  const frontMatter = source.data
  console.log(source)
  return {
    props: {
      mdxSource,
      frontMatter,
    },

    // props: {
    //   post,
    // },
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
