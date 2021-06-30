import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const BlueBox = styled.div`
    border: solid 5px blue;
    color: blue;
    font-size: 30px;
    width: 40%;
`

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home page.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlueBox>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
      </BlueBox>

      <p> Read{' '}
        <Link href="/page">
          <a>Another page!</a>
        </Link>
      </p>

      <code>pages/index.js</code>
  
  
      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
