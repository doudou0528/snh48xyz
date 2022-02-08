import * as React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

const logoStyles = {
    background: "#63caf3",
    border: "none",
    color: "#0b4e66",
    padding: "0.25em",
    textDecoration: "none"
}
const SmallLink = tw.span`text-lg`

const Nav = () => {
  return (
    <nav css={tw`grid lg:grid-cols-6 gap-2 sm:grid-cols-1`}>
        <div css={tw`col-span-2`}>
        <span css={tw`text-3xl font-semibold`}>
            <Link to="/" style={logoStyles} className="logo">SNH48.xyz</Link>
        </span>
        </div>
        <div css={tw`col-span-4 py-2 space-x-2`} className="internal">
            <Link to="/all">
                <SmallLink>
                    All Content
                </SmallLink>
            </Link>
            <Link to="/groups">
                <SmallLink>
                    Find by Group/Team/Member
                </SmallLink>
            </Link>
        </div>
    </nav>
  )
}

export default Nav
