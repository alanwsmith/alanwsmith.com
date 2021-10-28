import { getAllPosts, getPostBySlug } from '../lib/api'
import Head from 'next/head'
import LayoutMain from '../components/LayoutMain.js'
// import { MDXRemote } from 'next-mdx-remote'
// import Checklist from '../components/Checklist'

// import { getMDXComponent } from 'mdx-bundler/client'

export default function Post() {
  return <div>here</div>
}

/*
const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <div className="wrapper">
      <h1>{frontmatter.title}</h1>
      <Component />
    </div>
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

const components = { Checklist }

export function old_Post({ frontMatter, mdxSource }) {
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
              <MDXRemote {...mdxSource} components={components} />
            </div>
          </div>
        }
      />
    </>
  )
}

export async function old_getStaticProps({ params }) {
  const source = await getPostBySlug(params.slug)
  const mdxSource = source.mdxSource
  const frontMatter = source.data
  return {
    props: {
      mdxSource,
      frontMatter,
    },
  }
}

export function old_getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}
*/
