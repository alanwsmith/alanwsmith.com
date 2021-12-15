import Head from 'next/head'
import Link from 'next/link'
import LayoutMain from '../components/LayoutMain.js'

export default function BlogList({ posts }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="The Pod Of Alan" />
        <meta property="og:type" content="website" />
        <meta name="twitter:creator" content="@theidofalan" />
        <meta
          property="og:description"
          content="The Pod Of Alan - The podcast of Alan W. Smith"
        />
        <meta
          property="og:url"
          content={`https://www.alanwsmith.com/podcast`}
        />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/awsimages/image/upload/w_1200,h_630/thepodofalan_ogimage_v1_psb9u3.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <LayoutMain
        content={
          <>
            <p className="pb-4 text-blue-200 max-w-prose">
              Welcome to ThePodOfAlan!
            </p>
            <p className="pb-4 text-blue-200 max-w-prose">
              I&apos;m still getting the podcast feed setup. In the mean time,
              you can listent to the episodes here.
            </p>

            <div className="max-w-prose pt-4 border-t border-gray-400 text-blue-200">
              <h3>Season 1</h3>
              <ul>
                <li>
                  <Link href="/posts/20cqqonf5mad--obligatory-intro-meta-talk--the-pod-of-alan--s1e1">
                    <a>S1:E1 - Obligatory Intro Meta Talk</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/e489b88a-5a9d-4480-95f0-d35758afa4aa/audio/1960a382-21e4-419f-9b2a-f0695fa9b10a/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
                <li>
                  <Link href="/posts/20smffslqp9g--obligatory-intro-meta-talk-aftershow--the-pod-of-alan">
                    <a>S1:E1 - Aftershow</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/9f463edf-b04b-4e56-9b1d-4e2824855407/audio/ff2a8bf1-6fed-48a7-b429-67d015cd9883/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
                <li>
                  <Link href="/posts/20spk2lln4n2--changing-the-intro--the-pod-of-alan--s1e2">
                    <a>S1:E2 - Changing The Intro</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/f6ccc822-ad8b-403d-8789-57b7418360e9/audio/fad0a1bc-80dc-42bc-a93d-9c39f29f89de/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
                <li>
                  <Link href="/posts/20sxnixbhn50--changing-the-intro-aftershow--the-pod-of-alan">
                    <a>S1:E2 - Aftershow</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/dd6c5038-d438-4916-9092-b1343c37557d/audio/2d7c1bde-dbf0-453c-8edd-d1082581cee3/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
                <li>
                  <Link href="/posts/20sekpy2uuib--my-three-brains--the-pod-of-alan--s1e3">
                    <a>S1:E3 - My Three Brains</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/b2a2a943-ddb3-409f-a044-b838c1848046/audio/5628f671-e120-4f9c-9878-e489687d59a7/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
                <li>
                  <Link href="/posts/20semafqxmph--my-three-brains-aftershow--the-pod-of-alan">
                    <a>S1:E3 - Aftershow</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/ad81e7db-4925-42b5-9782-0b16c628af17/audio/1871def7-a184-4644-bf85-5e82c8e18b7b/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
                <li>
                  <Link href="/posts/20txfnxvdkma--practice-in-isolation--the-pod-of-alan--s1e4">
                    <a>S1:E4 - Practice In Isolation</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/b80e81f8-fd0a-4e8d-b222-f5c22cde60ed/audio/164d1bd0-fc85-4e33-ae40-43cbe0327186/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>

                <li>
                  <Link href="/posts/20te45fsw9i0--practice-in-isolation-aftershow--the-pod-of-alan">
                    <a>S1:E4 - Aftershow</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/f9c150e5-9261-487b-baf9-181d46d53eb9/audio/a51ebfb5-456b-4c72-9f0b-d999ccac05d3/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
              </ul>
            </div>
          </>
        }
      />
    </>
  )
}
