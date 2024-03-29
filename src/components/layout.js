/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "../styles/app.scss";

const Layout = ({ name, downloadFile, children }) => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const systemDark = window.matchMedia('(prefers-color-scheme : dark)');
    setDark(systemDark.matches);
  }, []);
  return (
    <div className={`theme ${dark ? 'theme--dark' : 'theme--light' }`} id="export-body">
      <div className="mainBody">
        <Header siteTitle={name} setDark={setDark} dark={dark}/>
        <div className="content">
          <main className="main">{children}</main>
        </div>
        <footer className="pdfMode">
          <span className="gatsbyLink">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
          <a href={downloadFile}><h4>Download as PDF</h4></a>
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
