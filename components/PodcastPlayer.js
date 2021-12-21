////////////////////////////////////////////////////
//  This is the podcast player to make it a little
//  easier to style
///////////////////////////////////////////////////

export default function PodcastPlayer({ src }) {
  return (
    <div className="pt-8 pb-10">
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Unfortunately, your browser does not support embedding the podcast.
      </audio>
    </div>
  )
}
