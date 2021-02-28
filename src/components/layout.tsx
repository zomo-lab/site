/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import Header from "./header"
import "./layout.css"
import { SiteTitleQuery } from "../../graphql-types"

interface Props {
  children: ReactNode
}

const useSiteTitle = () => {
  const data  = useStaticQuery<SiteTitleQuery>(
    graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return data?.site?.siteMetadata?.title || ""
}

const Layout: React.FC<Props> = ({ children }) => {
  const title = useSiteTitle()

  return (
    <>
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Zomo Lab avec <span style={{color: 'red'}}>&#9829;
            </span>
        </footer>
      </div>
    </>
  )
}

export default Layout
