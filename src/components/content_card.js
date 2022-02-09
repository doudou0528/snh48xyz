import React, { useState } from 'react'
import tw from 'twin.macro'
import GroupTag from './group_tag'
import TeamTag from './team_tag'
import MemberTag from './member_tag'

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
    <div className="internal" css={tw`pt-2 pb-4 space-x-2 px-2 shadow-sm rounded text-xs leading-8`}>
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
    <button css={tw`bg-purple-600 text-sm hover:cursor-pointer
      font-semibold text-purple-100 outline-none border-none rounded px-2 py-2`}
     onClick={(e) => setLinkIsRevealed(true)}>Reveal Link 🔗</button>
  }

  return (
    <div css={tw`drop-shadow-lg shadow p-5 rounded-md`}>
        <span css={tw`bg-gray-50 p-2`}>{props.date}</span>
        <h4>{props.name}</h4>
        <div css={tw`space-x-2 pb-6 flex flex-wrap gap-y-6`}>
            <GroupTags groups={props.groups} />
            <TeamTags teams={props.teams} />
        </div>
        <MemberLinks members={props.members} />
        <div css={tw`space-x-2 pt-4`} className="external">
            <span>{"->"}</span>
        {linkBox}
        </div>
    </div>
  )
}

export default ContentCard
