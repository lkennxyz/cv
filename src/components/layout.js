/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Pdf from "./pdf";
import "../styles/app.scss";

const Layout = ({ name, children }) => {
  const [dark, setDark] = useState(false);
  const [big, setBig] = useState(false);
  const [pdfMode, setPdfMode] = useState(false);
  useEffect(() => {
    if (document.getElementsByTagName("body")[0].height > window.innerHeight)
      setBig(() => true);
    const systemDark = window.matchMedia('(prefers-color-scheme : dark)');
    setDark(systemDark.matches);
  }, []);
  return (
    <div className={`theme ${dark ? 'theme--dark' : 'theme--light' } ${big ? 'theme--big' : 'theme--small'}`}>
      <div className="mainBody">
        <Header siteTitle={name} setDark={setDark} dark={dark} pdfMode={pdfMode}/>
        <div className="content">
          <main className="main">{children}</main>
        </div>
        <footer className={`${pdfMode ? 'pdf-mode': ''}`}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <Pdf
            setPdfMode={setPdfMode}
          />
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
