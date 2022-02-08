import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ContentList from '../components/content_list'
import MembersList from '../components/members_list'
import TeamTag from '../components/team_tag'
import tw from 'twin.macro'

const TeamPage = (props) => {
  const { pageContext } = props
  const { teamName,
          teamContent,
          languages,
          members
  } = pageContext

  return (
    <Layout>
        <div css={tw`mb-4 text-xl font-semibold`}>
            Team <TeamTag team={teamName} />
        </div>
        <div css={tw`mt-2 mb-2 px-4 pt-4 pb-2 border-2 border-solid border-gray-100 rounded`}>
        <MembersList members={members} />
        </div>
        <ContentList allContent={teamContent} languages={languages} />
        <div className="internal" css={tw`space-y-10 pt-12`}>
            <Link to="/groups">Back to all groups</Link>
        </div>
    </Layout>
  )
}

export default TeamPage
