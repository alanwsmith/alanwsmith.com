import { useState } from 'react'
import HeaderMain from '../../components/HeaderMain'
import ContentWrapper from '../../components/ContentWrapper'
import Sample1 from './samples/sample-1'
import Sample2 from './samples/sample-2'

export default function Page() {
  const [activeSample, setActiveSample] = useState(1)

  const samples = [
    <div key="s0">placeholder</div>,
    <Sample1 key="s1" />,
    <Sample2 key="s2" />,
  ]

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
          site. These are the samples I&apos;m of what I&apos;m working on.
          (They&apos;re not currently responsive. I&apos;ll be working on that.
          Also, the Copy buttons don&apos;t do anything since these are just
          mock-ups.)
        </p>

        <button onClick={() => switchToSample(1)}>1</button>
        <button onClick={() => switchToSample(2)}>2</button>

        <h3>Design {activeSample}</h3>
        {samples[activeSample]}
      </ContentWrapper>
    </>
  )
}
