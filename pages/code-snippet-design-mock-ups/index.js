import HeaderMain from '../../components/HeaderMain'
import ContentWrapper from '../../components/ContentWrapper'
import Sample1 from './samples/sample-1'

export default function Page() {
  return (
    <>
      <HeaderMain />
      <ContentWrapper>
        <h1>Code Snippet Design Tests</h1>
        <p>
          I&apos;ve been playing around with the design of code snippets for my
          site. These are the samples I&apos;m working with.
        </p>

        <h3>Sample 1</h3>
        <Sample1 />
      </ContentWrapper>
    </>
  )
}
