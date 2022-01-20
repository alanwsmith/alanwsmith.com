import Head from 'next/head'

export default function MetaData({ description, image, title, type, url }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@theidofalan" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
