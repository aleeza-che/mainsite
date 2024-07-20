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

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Container>
        <main>{children}</main>
        </Container>
      </div>

    <Navbar className="justify-content-center bg-body-theme-footer" expand="large" fixed="bottom">
    <Nav className="justify-content-center bg-body-theme-footer pb-5 pt-5">

        <Nav.Item>
          <Nav.Link href="https://well-being-journey.mn.co/" target="_blank">Join our Social Network</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/bible-reading">Family Bible Reading</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/th4">Team Hunger 4orce</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/the-kings-college">The King's College</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/young-fam">Young Fam</Nav.Link>
        </Nav.Item>
        <div className="text-center"> Copyright © {new Date().getFullYear()}&nbsp; &middot;&nbsp;&nbsp;
      <a href="/">{data.site.siteMetadata?.title}</a>&nbsp;&nbsp;&middot;&nbsp;&nbsp;All rights reserved. </div>
        </Nav>
      
      </Navbar>

     

    
    </>
  )
}

export default Layout
