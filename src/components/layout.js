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
      <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
      <Container>Copyright © {new Date().getFullYear()} &middot;&nbsp;
      <Navbar.Brand href="/">{data.site.siteMetadata?.title}</Navbar.Brand>&nbsp;All rights reserved.
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            

          </Nav>
          <Nav>
          <Nav.Link href="https://well-being-journey.mn.co/" target="_blank">Join our Social Network</Nav.Link>
          <Nav.Link href="/the-kings-college">The King's College</Nav.Link>

          <Nav.Link href="/bible-reading">Family Bible Reading</Nav.Link>
              <Nav.Link href="/young-fam">
                Young Fam
              </Nav.Link>
              <Nav.Link href="/th4">Team Hunger 4orce</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        
        <main>{children}</main>
        
      </div>
    </>
  )
}

export default Layout
