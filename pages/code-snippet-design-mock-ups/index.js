import { useState } from 'react'
import HeaderMain from '../../components/HeaderMain'
import ContentWrapper from '../../components/ContentWrapper'
import Sample1 from './samples/sample-1'
import Sample2 from './samples/sample-2'

export default function Page() {
  const [activeSample, setActiveSample] = useState(0)

  const samples = [<Sample1 key="s1" />, <Sample2 key="s2" />]

  const switchToSample = (sampleIndex) => {
    setActiveSample(sampleIndex)
    console.log(sampleIndex)
  }

  return (
    <>
      <style jsx>
        {`
          h3 {
            margin-top: 20px;
          }
        `}
      </style>

      <HeaderMain />
      <ContentWrapper>
        <h1>Code Snippet Design Tests</h1>
        <p>
          I&apos;ve been playing around with the design of code snippets for my
          site. These are the samples I&apos;m working with. (These are not
          currently responsive. I&apos;ll be working on that. Also, the Copy
          buttons don&apos;t do anything since these are just mock-ups.)
        </p>

        <ul>
          <li>These mock-ups are focused on the layout</li>
          <li>
            The colors are a baseline. They&apos;ll be determined by the overall
            site theme in the end
          </li>
        </ul>

        <button onClick={() => switchToSample(0)}>1</button>
        <button onClick={() => switchToSample(1)}>2</button>

        <h3>Sample 1</h3>
        <ul>
          <li>Pretty much a baseline sample</li>
          <li>Only showing ling numbers by the code.</li>
          <li>
            Using a pointer for the output line, but it&apos;s still in the main
            content box
          </li>
        </ul>
        {samples[activeSample]}

        <h3>Sample 2</h3>
        <ul>
          <li>Basic idea here is to split the code from the output</li>
        </ul>

        <Sample2 />
      </ContentWrapper>
    </>
  )
}
