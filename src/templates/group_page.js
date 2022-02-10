import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ContentList from '../components/content_list'
import MembersList from '../components/members_list'
import tw from 'twin.macro'
import GroupTag from '../components/group_tag'
import PropTypes from 'prop-types'

const GroupPage = (props) => {
  const { pageContext } = props
  const { groupName,
          groupContent,
          languages,
          members,
          contentTypeOptions } = pageContext

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

GroupPage.propTypes = {
    groupName: PropTypes.string,
    groupContent: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
      groups: PropTypes.arrayOf(PropTypes.string),
      teams: PropTypes.arrayOf(PropTypes.string),
      members: PropTypes.arrayOf(PropTypes.string)
    })),
    languages: PropTypes.arrayOf(PropTypes.string),
    members: PropTypes.arrayOf(PropTypes.shape({
        tname: PropTypes.string, // Team name
        sname: PropTypes.string, // Simplified Chinese name
        pinyin: PropTypes.string, // Pinyin name
        weibo_uid: PropTypes.string,
        abbr: PropTypes.string,
        nickname: PropTypes.string,
        birth_day: PropTypes.string,
        birth_place: PropTypes.string,
        hobby: PropTypes.string,
        specialty: PropTypes.string,
        catch_phrase: PropTypes.string,
        blood_type: PropTypes.string,
        star_sign_12: PropTypes.string,
        ranking: PropTypes.string,
        pname: PropTypes.string, // Generation
        join_day: PropTypes.string,
        experience: PropTypes.string
    })),
    contentTypeOptions: PropTypes.arrayOf(PropTypes.string)
}