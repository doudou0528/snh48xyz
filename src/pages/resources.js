import * as React from 'react'
import Layout from '../components/layout'
import tw from 'twin.macro'

const ResourcesPage = () => {
  return (
    <Layout>
    <main className="external">
      <h3>Resources</h3>
      <ul css={tw`space-y-8`}>
        <li>Watch past stages on <a href="https://space.bilibili.com/1315101">Bilibili</a> or <a href="https://www.youtube.com/c/SNH48OfficalAppPocket48">Youtube</a></li>
        <li>Slang, member names and nicknames, etc. @ <a href="https://docs.google.com/spreadsheets/d/1NWwX2cwaSokpi1LamozhQd4KxQrehbomyN-q1kKUruk/edit?usp=sharing">SNH48 glossary</a></li>
        <li><a href="https://twitter.com/info_snh48group">Info @ SNH48 Group</a> maintains an up-to-date <a href="https://snh48groupinfo.fandom.com/wiki/SNH48">wiki</a></li>
        <li>How to use <a href="https://twitter.com/waangyi/status/1186798863799242752">Pocket48</a></li>
        <li>Install <a href="https://twitter.com/doudou_0528/status/1485726202925129733">48tools</a> to watch member lives, download videos, and more on your computer</li>
      </ul>
    </main>
    </Layout>
  )
}

export default ResourcesPage
