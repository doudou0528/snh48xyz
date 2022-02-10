import * as React from 'react'
import { Link } from 'gatsby'
//import tw from 'twin.macro'
import PropTypes from 'prop-types'

const LinkWrapper = ({ showLink, link, children}) => {
    if (showLink) {
        return <Link to={link}>{children}</Link>
    } else {
        return <span>{children}</span>
    }
}

const convertNameToLink = (memberName) => {
    if (memberName) {
        return "/members/"+memberName.toLowerCase().replace(/ /g,"_")
    }
}

const MemberTag = (props) => {
    const memberName = props.memberName
    const link = convertNameToLink(memberName)

    return (
    <LinkWrapper showLink={props.showLink} link={link}>
        <span className="internal">
            {memberName}
        </span>
    </LinkWrapper>
    )
  }
  
  export default MemberTag
  
MemberTag.propTypes = {
    memberName: PropTypes.string,
    showLink: PropTypes.bool
}