import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../utils/mdx_v2'

const Post = ({ code, frontmatter }) => {
  //return <div>asdf</div>
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <div>{frontmatter.date}</div>
      <Component />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  console.log('## This is getStaticProps ##')
  const post = await getSinglePost(params.slug)

  console.log(params.slug)
  // if (params.slug === '20eMe1QFQUMn--the-golden-gate-bridge-turns-76') {
  //   return {
  //     redirect: {
  //       destination: '/posts/20eLG89zSnmm--first-post--yeah-yeah',
  //       permanent: false,
  //     },
  //   }
  // }

  // const post = await getSinglePost('20WSeUJYfBd3')
  // const post = {}
  return {
    props: { ...post },
    // props: {},
  }
}

export const getStaticPaths = async () => {
  console.log('### This is getStaticPaths ###')
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  console.log(`-- Lenght of paths: ${paths.length}`)
  console.log(`-- Paths: ${Object.keys(paths[0])}`)
  console.log(`-- Slug: ${paths[0].params.slug}`)
  return {
    paths,
    fallback: false,
  }
}

export default Post
