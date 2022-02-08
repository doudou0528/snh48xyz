import * as React from 'react'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'

const LinkWrapper = ({ showLink, link, children}) => {
    if (showLink) {
        return <Link to={link} className="tag">{children}</Link>
    } else {
        return <span>{children}</span>
    }
}

const TeamTag = (props) => {
    const validTeams = new Set(["sii", "nii", "hii", "x", "g", "niii", "z", "ckg48", "bej48"])
    const team = props.team
    let slug = team && team.toLowerCase()
    let link
    if (validTeams.has(slug)) {
        link = "/teams/"+slug
    } else {
        slug = "other"
        link = "/teams/other"
    }

    const tagVariants = {
        // Named class sets
        sii: tw`bg-blue-200`,
        nii: tw`bg-purple-100`,
        hii: tw`bg-yellow-200`,
        x: tw`bg-green-200`,
        g: tw`bg-green-300`,
        niii: tw`bg-yellow-300`,
        z: tw`bg-pink-300`,
        other: tw`bg-gray-100`
      }

    const Tag = styled.span(() => [
        tw`p-2 inline`,
        ({ variant = 'other' }) => tagVariants[variant], // Grab the variant style via a prop
    ])
      
    return (
    <LinkWrapper showLink={props.showLink} link={link}>
    <Tag variant={slug}>
        {team}
    </Tag>
    </LinkWrapper>
    )
  }
  
  export default TeamTag
  