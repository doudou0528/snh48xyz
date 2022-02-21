import React, { useState } from 'react'
import tw from 'twin.macro'
import GroupTag from './group_tag'
import TeamTag from './team_tag'
import MemberTag from './member_tag'
import PropTypes from 'prop-types'

const GroupTags = (props) => (
    <span css={tw`space-x-2`}>{props.groups.map((group) => 
        <GroupTag group={group} showLink={true} key={group} />
    )}</span>
);

const TeamTags = (props) => (
    <span css={tw`space-x-2`}>{props.teams.map((team) => 
        <TeamTag team={team} showLink={true} key={team} />
    )}</span>
);

const MemberLinks = (props) => (
    <div className="member-links" css={tw`pt-2 pb-2 space-x-2 px-2 border-2 border-l-0 border-r-0 border-solid border-gray-100 text-xs leading-8`}>
        {props.members.map((member) =>
            <MemberTag memberName={member} showLink={true} key={member} />
        )}
    </div>
);

const ContentCard = (props) => {
  const [linkIsRevealed, setLinkIsRevealed] = useState(false);
  let linkBox;
  if (linkIsRevealed) {
    linkBox = <a href={props.link}>Link 🔗</a>
  } else {
    linkBox =
    <button css={tw`bg-pink-200 text-sm hover:cursor-pointer
    text-pink-700 outline-none border border-solid border-pink-300 px-2 py-2`}
     onClick={(e) => setLinkIsRevealed(true)}>Reveal Link 🔗</button>
  }

  return (
    <div css={tw`drop-shadow-lg shadow p-5 rounded-md`}>
        <div css={tw`grid lg:grid-cols-2 sm:grid-cols-1 gap-y-6`}>
            <div css={tw`xl:col-span-1 sm:col-span-2`}>
                <span css={tw`bg-gray-100 text-gray-500 border-solid border border-gray-200 p-2`}>{props.date}</span>
            </div>
            <div css={tw`xl:col-span-1 sm:col-span-2 place-self-end`}>
            <GroupTags groups={props.groups} />
            </div>
        </div>
        <h4 css={tw`text-gray-700`}>{props.name}</h4>
        <MemberLinks members={props.members} />
        <div css={tw`grid lg:grid-cols-4 sm:grid-cols-1 gap-y-6 w-full`}>
            <div css={tw`xl:col-span-1 space-x-2 flex flex-wrap gap-y-6 mt-4`}>
                <TeamTags teams={props.teams} />
            </div>
            <div css={tw`xl:col-span-3 pt-2 place-self-end`} className="external">
                {linkBox}
            </div>
        </div>
    </div>
  )
}

export default ContentCard

ContentCard.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    groups: PropTypes.arrayOf(PropTypes.string).isRequired,
    teams: PropTypes.arrayOf(PropTypes.string).isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired
}