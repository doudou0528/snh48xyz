import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import GroupsList from '../components/groups_list'
import MembersList from '../components/members_list'
//import tw from 'twin.macro'


const GroupsPage = ({ data }) => {
  const membersList = data.allSitePage.edges.map((edge) => {
    return {
      "pinyin": edge.node.pageContext.membersWithName[0]["pinyin"]
    }
  })

  return (
    <Layout>
    <main>
        <h3>Groups and Teams</h3>
        <GroupsList />
        <h4>Complete Directory</h4>
        <MembersList members={membersList} />
    </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allSitePage(filter: {path: {regex: "/members/"}}) {
      edges {
        node {
          path
          pageContext
        }
      }
    }
  }
`


export default GroupsPage
