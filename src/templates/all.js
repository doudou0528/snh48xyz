import * as React from 'react'
import Layout from '../components/layout'
import ContentList from '../components/content_list'

const AllPage = (props) => {
  const { pageContext } = props
  const { allContent, languages } = pageContext

  return (
    <Layout>
      <ContentList allContent={allContent} languages={languages} />
    </Layout>
  )
}

export default AllPage
