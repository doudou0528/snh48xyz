import * as React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

const FooterWrapper = tw.div`grid lg:grid-cols-3 sm:grid-cols-1 gap-2 lg:p-16 sm:p-0`

const Footer = () => {
  return (
    <FooterWrapper>
        <div className="internal"><Link to="/resources">Resources/Guides</Link></div>
        <div className="internal"><Link to="/contribute">Contribute Content 投稿</Link></div>
        <div className="external"><a href="https://github.com/doudou0528/snh48xyz">GitHub</a></div>
    </FooterWrapper>
  )
}

export default Footer
