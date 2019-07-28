/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../styles/app.scss";

const Layout = ({ name, skills, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [dark, setDark] = useState(false);
  return (
    <div className={`theme ${dark ? 'theme--dark' : 'theme--light' }`}>
      <div className="mainBody">
        <Header siteTitle={name} setDark={setDark} dark={dark}/>
        <div className="content">
          <div className="leftBar">
            <h3>Skills</h3>
            <ul>
              {
                skills.map((el, i) => 
                <li key={i}>{el}</li>
                )
              }
            </ul>
          </div>
          <main className="main">{children}</main>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default Layout
