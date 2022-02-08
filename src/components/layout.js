import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './footer'
import Nav from './nav'
import tw from 'twin.macro'

export default function Layout({ children }) {
  return (
    <>
      <Helmet> {/* Helmet is an HTML Document head manager */}
        <title>SNH48.xyz</title>
        <meta name="title" content="SNH48.xyz" />
        <meta name="description" content="Translated content" />
        <meta property="og:type" content="website" />
        {/* Facebook */}
        <meta property="og:url" content="https://snh48.xyz/" />
        <meta property="og:title" content="SNH48.xyz" />
        <meta property="og:description" content="Translated content" />
        {/* Twitter */}
        <meta property="twitter:url" content="https://snh48.xyz/" />
        <meta property="twitter:title" content="SNH48.xyz" />
        <meta property="twitter:description" content="Translated content" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="robots" content="noindex" data-react-helmet="true" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      <div css={tw`container mx-auto xl:p-12 font-sans sm:p-0`}>
        <Nav />
        <div css={tw`xl:p-12 sm:p-0`}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}
