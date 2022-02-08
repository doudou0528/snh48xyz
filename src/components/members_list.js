import * as React from 'react'
import MemberTag from './member_tag'
import tw from 'twin.macro'

const MembersList = (props) => {
  const members = props.members

  return (
    <div css={tw`space-x-2 pb-4 text-xs leading-8`} className="internal">
          {members.map((member) => 
            <MemberTag key={member["pinyin"]} memberName={member["pinyin"]} showLink={true} />
          )}
      </div>
  )
}

export default MembersList