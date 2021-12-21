import Head from 'next/head'
import Link from 'next/link'
import LayoutMain from '../components/LayoutMain.js'
import Img from '../components/Img.js'
import PodcastPlayer from '../components/PodcastPlayer'

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
        <link href="" />
        <link
          type="application/rss+xml"
          rel="alternate"
          title="The Pod Of Alan - The Podcast Of Alan W. Smith"
          href="https://www.alanwsmith.com/thepodofalan.xml"
        />
      </Head>
      <LayoutMain
        content={
          <>
            <h1 className="pb-4 text-blue-200 max-w-prose">The Pod Of Alan</h1>
            <p className="pb-4 text-blue-200 max-w-prose">
              Welcome to my podcast riffing on working in public, making stuff,
              creativity, art, design, education, learning, language, mental
              health, movies, and music.
            </p>
            <p className="pb-4 text-blue-200 max-w-prose">
              You can get it on{' '}
              <a href="https://music.amazon.com/podcasts/6c935bd2-31ed-4c97-a179-8ac70f76a7c3/the-pod-of-alan">
                Amazon
              </a>
              ,{' '}
              <a href="https://podcasts.apple.com/us/podcast/the-pod-of-alan/id1600597473">
                Apple
              </a>
              ,{' '}
              <a href="https://www.audible.com/pd/Podcast/B08K56HFPB">
                Audible
              </a>
              ,{' '}
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuYWxhbndzbWl0aC5jb20vdGhlcG9kb2ZhbGFuLnhtbA">
                Google
              </a>
              ,{' '}
              <a href="https://open.spotify.com/show/1dVQS0gZGpN6AJryeJTv5d?si=934487f6f48d476d">
                Spotify
              </a>
              , and pretty much any other podcast app. (Please let me know if
              you find one where the show isn&apos;t available)
            </p>

            <p className="pb-4 text-blue-200 max-w-prose">
              The raw feed{' '}
              <Link href="/thepodofalan.xml">
                <a>is here</a>
              </Link>{' '}
              if you&apos;re into that kind of thing.
            </p>

            <div className="max-w-prose pt-4 border-t border-gray-400 text-blue-200">
              <p className="pb-4 text-blue-200 max-w-prose">
                And here are the web versions of the episodes if you prefer to
                listen that way. Show notes and transcripts are available by
                clicking the links.
              </p>
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
                    <a>S1:E1 (Aftershow)</a>
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
                    <a>S1:E2 (Aftershow)</a>
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
                    <a>S1:E3 (Aftershow)</a>
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
                    <a>S1:E4 (Aftershow)</a>
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

                <li>
                  <Link href="/posts/20zddkn5lmoe--in-which-i-almost-lose-my-house--the-pod-of-alan--s1e5">
                    <a>S1:E5 - In Which I Almost Lose My House</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/96d260b6-0a17-484e-bf96-4523127576f6/audio/61f66ada-9dba-49c6-abfa-28ef3af87109/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>

                <li>
                  <Link href="/posts/21ssrm1d2net--in-which-i-almost-lose-my-house-aftershow--the-pod-of-alan">
                    <a>S1:E5 (Aftershow) </a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/8c0d1169-a9ac-4bc9-a053-84e6d4c128c4/audio/ae646eee-0f05-446e-98d4-886fa1560b13/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>

                <li>
                  <Link href="/posts/21t2mwixhrxf--meta-editing--the-pod-of-alan--s1e6">
                    <a>S1:E6 - Meta Editing</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/289550f9-96f8-46d0-b31d-9011f12c0770/audio/8f23feb9-ddae-4e83-8cd9-7e9c22bcd731/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>

                <li>
                  <Link href="/posts/21t2txmznbmi--meta-editing-aftershow--the-pod-of-alan">
                    <a>S1:E6 (Aftershow) </a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/3627603f-39a5-4622-9d51-c117429982b9/audio/cd856010-5309-404d-8a19-169992e52d53/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
                <li>
                  <Link href="/posts/21t30avjb3ic">
                    <a>S1:E7 - The Songs That Saved My Life</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/3abe5313-e8f4-4070-804e-d9a62a77eb97/audio/37e9ed07-91ef-4a83-9e12-b1865c9dc068/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
                <li>
                  <Link href="/posts/21t33smeyjfs">
                    <a>S1:E7 (Aftershow)</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/44b7eb80-6209-45a5-ad83-329d1c43e403/audio/0837913b-b917-4e49-bd85-fd284720c081/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>
              </ul>

              {/* <p className="pb-4 text-blue-200 max-w-prose border-t border-gray-400 pt-8"> */}
              {/*   You can ignore this, but I need{' '} */}
              {/*   <Link href="/thepodofalan-google.xml"> */}
              {/*     <a>this link</a> */}
              {/*   </Link>{' '} */}
              {/*   to get google to work because they won&apos;t use the main feed */}
              {/*   for some reason. */}
              {/* </p> */}
            </div>
          </>
        }
      />
    </>
  )
}
