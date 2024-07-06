/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

  const moreLinks = [
    { text: "Join our Social Network", url: "https://well-being-journey.mn.co/" },
    {
      text: "The Kings College",
      url: "/the-kings-college",
    },
    {
      text: "Bible Reading",
      url: "/bible-reading",
    },
    {
      text: "Young Fam",
      url: "/young-fam",
    },
    {
      text: "Team Hunger 4orce",
      url: "/th4",
    },
  ]
  

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}  target={`_blank`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          Copyright © {new Date().getFullYear()} &middot;
          {` `}
          <a href="/">Dependent Well.</a> All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default Layout
