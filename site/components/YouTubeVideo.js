export default function YouTubeVideo({ id }) {
  return (
    <>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: '0',
          overflow: 'hidden',
          maxWidth: '100%',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}?controls=0`}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
