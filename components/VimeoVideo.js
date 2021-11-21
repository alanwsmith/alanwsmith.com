export default function VimeoVideo({ id }) {
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
          src={`https://player.vimeo.com/video/${id}`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </>
  )
}
