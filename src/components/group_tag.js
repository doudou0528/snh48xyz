import * as React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

const LinkWrapper = ({ showLink, link, children}) => {
    if (showLink) {
        return <Link to={link} className="tag">{children}</Link>
    } else {
        return <span>{children}</span>
    }
}

const GroupTag = (props) => {
    const group = props.group
    const link = "/groups/"+group.toLowerCase()

    return (
    <LinkWrapper showLink={props.showLink} link={link}>
        <span css={[tw`p-2 inline`,
            group === "SNH48" && tw`bg-blue-100`,
            group === "GNZ48" && tw`bg-green-100`,
            group === "BEJ48" && tw`bg-pink-100`,
            group === "CKG48" && tw`bg-yellow-100`,
        ]}>
            {group}
        </span>
    </LinkWrapper>
    )
  }
  
  export default GroupTag
  