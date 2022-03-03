import { useState } from 'react'
import HeaderMain from '../../components/HeaderMain'
import ContentWrapper from '../../components/ContentWrapper'
import Design1 from './designs/design-1'
import Design2 from './designs/design-2'
import Design3 from './designs/design-3'
import Design4 from './designs/design-4'
import Design5 from './designs/design-5'
import Design6 from './designs/design-6'
import Design7 from './designs/design-7'
import Design8 from './designs/design-8'
import Design9 from './designs/design-9'
import Design10 from './designs/design-10'
import style from './Styles.module.css'

export default function Page() {
  const [activeDesign, setActiveDesign] = useState(1)

  const designs = [
    <div key="s0">placeholder</div>,
    <Design1 key="s1" />,
    <Design2 key="s2" />,
    <Design3 key="s3" />,
    <Design4 key="s4" />,
    <Design5 key="s5" />,
    <Design6 key="s6" />,
    <Design7 key="s7" />,
    <Design8 key="s8" />,
    <Design9 key="s9" />,
    <Design10 key="s10" />,
  ]

  const switchToSample = (designIndex) => {
    setActiveDesign(designIndex)
    console.log(designIndex)
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

        <div className={style.buttonStrip}>
          <button onClick={() => switchToSample(1)}>1</button>
          <button onClick={() => switchToSample(2)}>2</button>
          <button onClick={() => switchToSample(3)}>3</button>
          <button onClick={() => switchToSample(4)}>4</button>
          <button onClick={() => switchToSample(5)}>5</button>
          <button onClick={() => switchToSample(6)}>6</button>
          <button onClick={() => switchToSample(7)}>7</button>
          <button onClick={() => switchToSample(8)}>8</button>
          <button onClick={() => switchToSample(9)}>9</button>
          <button onClick={() => switchToSample(10)}>10</button>
        </div>

        <h3>Design {activeDesign}</h3>
        {designs[activeDesign]}
      </ContentWrapper>
    </>
  )
}
