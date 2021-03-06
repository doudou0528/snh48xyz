import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ContentList from '../components/content_list'
import TeamTag from '../components/team_tag'
import tw from 'twin.macro'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

const MemberPage = (props) => {
  const { pageContext } = props
  const { membersWithName, memberContent, languages, contentTypeOptions } = pageContext

  return (
    <Layout>
      <div css={tw`pb-4`}>
          {membersWithName.map((member) =>
            <div css={tw`shadow px-8 py-2 rounded text-sm`} key={member["tname"]+member["pinyin"]}>
              <h3>
                <TeamTag team={member["tname"]} showLink={true} />
                <span css={tw`ml-4`}>{member["pinyin"]}</span>
                <span css={tw`text-xs ml-4 bg-yellow-700 rounded-md px-1.5 py-1 hover:bg-yellow-800 transition`}>
                  <a css={tw`no-underline text-yellow-300`}
                   href={"https://weibo.com/"+member["weibo_uid"]}>Weibo</a>
                </span>
              </h3>
              <div css={tw`grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1`}>
                <div>
                  <h4>Intro</h4>
                  <ul>
                    <li>Simplified name: {member["sname"]}</li>
                    <li>Nickname: {member["nickname"]}</li>
                    <li>Abbreviation: {member["abbr"]}</li>
                    <li>Birthplace: {member["birth_place"]}</li>
                    <li>Birthday: {member["birth_day"]}</li>
                  </ul>
                </div>
                <div>
                  <h4>Personal Info</h4>
                  <ul>
                    <li>Hobby: {member["hobby"]}</li>
                    <li>Specialty: {member["specialty"]}</li>
                    <li>Catchphrase: {member["catch_phrase"]}</li>
                    <li>Blood type: {member["blood_type"]}</li>
                    <li>Star sign: {member["star_sign_12"]}</li>
                  </ul>
                </div>
                <div>
                  <h4>Group History</h4>
                  <ul>
                    <li>Ranking: {(member["ranking"] > 0) && member["ranking"]}</li>
                    <li>Team: {member["tname"]}</li>
                    <li>Generation: {member["pname"]}</li>
                    <li>Join date: {member["join_day"]}</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Experience</h4>
                <p>{member["experience"] && parse(member["experience"])}</p>
              </div>
            </div>
          )}
      </div>
      <ContentList allContent={memberContent} languages={languages} contentTypeOptions={contentTypeOptions} />
      <div className="internal" css={tw`space-y-10 pt-12`}>
          <Link to="/groups">Back to all groups</Link>
      </div>
    </Layout>
  )
}

export default MemberPage

MemberPage.propTypes = {
  memberContent: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    groups: PropTypes.arrayOf(PropTypes.string),
    teams: PropTypes.arrayOf(PropTypes.string),
    members: PropTypes.arrayOf(PropTypes.string)
  })),
  languages: PropTypes.arrayOf(PropTypes.string),
  membersWithName: PropTypes.arrayOf(PropTypes.shape({
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