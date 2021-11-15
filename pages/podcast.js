import Head from 'next/head'
import Link from 'next/link'
import LayoutMain from '../components/LayoutMain.js'

export default function BlogList({ posts }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="alanwsmith.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:creator" content="@theidofalan" />
        <meta
          property="og:description"
          content="ThePodOfAlan - The podcast of Alan W. Smith"
        />
        <meta
          property="og:url"
          content={`https://www.alanwsmith.com/podcast`}
        />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/awsimages/image/upload/c_fit,l_text:Arial_68_bold:ThePodOfAlan,w_720/fl_layer_apply,g_north_west,x_480,y_68/og-image-v3_eka6dz.png`}
        />
      </Head>
      <LayoutMain
        content={
          <>
            <p className="pb-4 text-blue-200 max-w-prose">
              Welcome to ThePodOfAlan!
            </p>
            <p className="pb-4 text-blue-200 max-w-prose">
              I'm still getting the podcast feed setup. In the mean time, here
              are the episodes on youtube
            </p>

            <div className="max-w-prose pt-4 border-t border-gray-400 text-blue-200">
              <h3>Season 1</h3>
              <ul>
                <li>
                  <Link href="/posts/20cqqoNF5mAd--thepodofalan--season-1--episode-1--show-notes">
                    <a>Episode 1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts/20sMFFslqP9G--thepodofalan--season-1--episode-1--aftershow-notes">
                    <a>Episode 1 - Aftershow</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts/20sPk2lLN4n2--thepodofalan--season-1--episode-2--show-notes">
                    <a>Episode 2</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts/20sXNIXBhn50--thepodofalan--season-1--episode-2--aftershow-notes">
                    <a>Episode 2 - Aftershow</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts/20sekPY2uuIb--thepodofalan--season-1--episode-3--show-notes">
                    <a>Episode 3</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts/20semafQXMpH--thepodofalan--season-1--episode-3--aftershow-notes">
                    <a>Episode 3 - Aftershow</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts/20tXfNxVDkMa--thepodofalan--season-1--episode-4--show-notes">
                    <a>Episode 4</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts/20te45Fsw9I0--thepodofalan--season-1--episode-4--aftershow-notes">
                    <a>Episode 4 - Aftershow</a>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        }
      />
    </>
  )
}
