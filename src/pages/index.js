import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import GroupsList from '../components/groups_list'
import tw from 'twin.macro'

const IndexPage = () => {
  return (
    <Layout>
    <main>
      <div className="internal">
        <h3>Explore <Link to="/all">All Content</Link></h3>
      </div>
      <div css={tw`pt-4 pb-2`}>
        <h3>Explore by group/team</h3>
        <GroupsList />
      </div>
      <h3>Notice</h3>
      <p>The primary goal of this website is to make it easier for SNH48 fans to discover content translated to other languages.
        All content including but not limited to Pocket48 translations, vlogs, short clips, MCs,
        explanations of SNH history, etc. are welcome.
        All links lead to the original source of the content so that the translator receives proper credit.
        Search engine indexing has been disabled. The only way to find this website is to have the link.</p>
    </main>
    </Layout>
  )
}

export default IndexPage
