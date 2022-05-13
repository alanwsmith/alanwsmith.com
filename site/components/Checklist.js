////////////////////////////////////////////////
// Takes a string of lines and returns a
// checkbox and line for each one. Blank
// lines are skipped
////////////////////////////////////////////////

export default function Checklist({ data }) {
  function makeId(length) {
    var result = ''
    var characters = 'abcdefghijklmnopqrstuvwxyz'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  function getThing(line, index) {
    if (line === '') {
      return null
    } else {
      const keyId = `${makeId(7)}_${index}`
      return (
        <li key={keyId}>
          <input type="checkbox" id={keyId} />
          <label htmlFor={keyId}>{line}</label>
        </li>
      )
    }
  }
  const lines = data.split('\n')
  const output = lines.map((line, index) => getThing(line, index))
  return <ol>{output}</ol>
}
