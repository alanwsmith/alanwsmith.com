////////////////////////////////////////////////////////
// This component is what's used to put the podcast
// links on each podcast page
// /////////////////////////////////////////////////////

export default function PodcastLinks() {
  return (
    <div>
      You can listen to the episode here or get it on{' '}
      <a href="https://music.amazon.com/podcasts/6c935bd2-31ed-4c97-a179-8ac70f76a7c3/the-pod-of-alan">
        Amazon Music Podcasts
      </a>
      ,{' '}
      <a href="https://podcasts.apple.com/us/podcast/the-pod-of-alan/id1600597473">
        Apple Podcasts
      </a>
      ,{' '}
      <a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuYWxhbndzbWl0aC5jb20vdGhlcG9kb2ZhbGFuLnhtbA">
        Google Podcasts
      </a>
      , <a href="https://www.audible.com/pd/Podcast/B08K56HFPB">Audible</a>,{' '}
      <a href="https://open.spotify.com/show/1dVQS0gZGpN6AJryeJTv5d?si=934487f6f48d476d">
        Spotify
      </a>
      , and most podcast apps. (Google Podcasts are coming soon. )
    </div>
  )
}
