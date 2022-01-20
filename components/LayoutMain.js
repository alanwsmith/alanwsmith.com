import Link from 'next/link'
import Head from 'next/head'
import Prism from 'prismjs'
import React, { useEffect } from 'react'

import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

// TODO: Switch over to using components/MetaData

export default function LayoutMain(props) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicons/128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicons/196x196.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="228x228"
          href="/favicons/228x228.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/favicons/152x152.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="167x167"
          href="/favicons/167x167.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/favicons/180x180.png"
        />
      </Head>
      <div className="bg-gray-800 min-h-screen">
        <nav
          className="
    m-0 mx-auto 
    text-blue-200 container 
    pt-2 
     px-6 max-w-prose
    "
        >
          <div className="border-b border-gray-700 max-w-prose">
            <div className="pt-2 pb-1 text-gray-500">
              <Link href="/">
                <a className="text-gray-500">Home</a>
              </Link>
              &nbsp; &nbsp; &nbsp;
              <Link href="/the-pod-of-alan">
                <a className="text-gray-500">Podcast</a>
              </Link>
              &nbsp; &nbsp; &nbsp;
              <a
                className="text-gray-500"
                href="https://twitter.com/TheIdOfAlan"
              >
                Twitter
              </a>
            </div>
          </div>
        </nav>
        <main className="pb-16 mx-auto container pt-3 px-6 max-w-prose">
          {props.content}
        </main>
      </div>
    </>
  )
}
