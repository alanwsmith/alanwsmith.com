import Head from 'next/head'
import Link from 'next/link'
import LayoutMain from '../components/LayoutMain.js'
import Img from '../components/Img.js'
import PodcastPlayer from '../components/PodcastPlayer'
import PodcastLinks from '../components/PodcastLinks'

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
          content={`https://www.alanwsmith.com/the-pod-of-alan`}
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
            <div className="pb-4 text-blue-200 max-w-prose">
              <PodcastLinks />
            </div>

            <div className="max-w-prose pt-4  text-blue-200">
              <p className="pb-4 text-blue-200 max-w-prose">
                Show notes and transcripts are available by clicking the links.
              </p>
              <h3>Season 1</h3>
              <ul>
                <li>
                  <Link href="/posts/20cqqonf5mad">
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
                  <Link href="/posts/20smffslqp9g">
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
                  <Link href="/posts/20spk2lln4n2">
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
                  <Link href="/posts/20sxnixbhn50">
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
                  <Link href="/posts/20sekpy2uuib">
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
                  <Link href="/posts/20semafqxmph">
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
                  <Link href="/posts/20txfnxvdkma">
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
                  <Link href="/posts/20te45fsw9i0">
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
                  <Link href="/posts/20zddkn5lmoe">
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
                  <Link href="/posts/21ssrm1d2net">
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
                  <Link href="/posts/21t2mwixhrxf">
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
                  <Link href="/posts/21t2txmznbmi">
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

                <li>
                  <Link href="/posts/21t34qemwdhc">
                    <a>S1:E8 - I&apos;m A Tik Toker Now</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/f201d4b8-b427-4fa5-857f-7b0ba46233ba/audio/e8f5a1c8-8506-4a92-a2f8-5a30700ee142/default_tc.mp3"
                      type="audio/mpeg"
                    />
                    Unfortunately, your browser does not support embedding the
                    podcast.
                  </audio>
                </li>

                <li>
                  <Link href="/posts/21t361ttroya">
                    <a>S1:E8 (Aftershow)</a>
                  </Link>
                  <audio controls>
                    <source
                      src="https://cdn.simplecast.com/audio/f900955e-9fdd-4695-bf12-22eeee2f4d9e/episodes/17002338-91e1-4647-bbaf-71d76078fcce/audio/f59cf3dc-3cba-4320-b7e8-072e675a6c91/default_tc.mp3"
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
