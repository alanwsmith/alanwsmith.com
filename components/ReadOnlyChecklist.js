////////////////////////////////////////////////
// Takes data in the format:
//
// 0, some thing
// 1, a checked thing
// 2, a struck though thing
//
// and turns it into a read only unordered list.
////////////////////////////////////////////////

export default function ReadOnlyChecklist1({ data }) {
  function getThing(line, index) {
    const parts = line.split(',')
    if (!parts[0]) {
      return null
    } else {
      const lineType = parts[0]
      parts.shift()
      const lineText = parts.join(',')
      if (lineType === '0') {
        return (
          <li key={index}>
            <input type="checkbox" id={index} checked={false} readOnly />
            {lineText}
          </li>
        )
      } else if (lineType === '2') {
        return (
          <li key={index}>
            <input type="checkbox" id={index} checked={false} readOnly />
            <strike>{lineText}</strike>
          </li>
        )
      } else {
        return (
          <li key={index}>
            <input type="checkbox" id={index} checked={true} readOnly />
            {lineText}
          </li>
        )
      }
    }
  }
  const lines = data.split('\n')
  const output = lines.map((line, index) => getThing(line, index))
  return <ul>{output}</ul>
}
