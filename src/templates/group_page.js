import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ContentList from '../components/content_list'
import MembersList from '../components/members_list'
import tw from 'twin.macro'
import GroupTag from '../components/group_tag'

const GroupPage = (props) => {
  const { pageContext } = props
  const { groupName,
          groupContent,
          languages,
          members,
          contentTypeOptions } = pageContext
    
    console.log(contentTypeOptions)

  return (
    <Layout>
        <div css={tw`mb-4 text-xl font-semibold`}>
            <GroupTag group={groupName} />
        </div>
        <div css={tw`mt-2 mb-2 px-4 pt-4 pb-2 border-2 border-solid border-gray-100 rounded`}>
        <MembersList members={members} />
        </div>
        <ContentList allContent={groupContent} languages={languages} contentTypeOptions={contentTypeOptions} />
        <div className="internal" css={tw`space-y-10 pt-12`}>
            <Link to="/groups">Back to all groups</Link>
        </div>
    </Layout>
  )
}

export default GroupPage