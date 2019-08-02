import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import Layout from "../components/layout";
import SEO from "../components/seo";
import data from "../data/cv.json";

const IndexPage = ({ pageContext }) => (
  <Layout 
    name = {data.name}
    downloadFile = {pageContext.downloadFile}
  >
    <SEO title="Home" />
    <div className="skills area">
      <h3>Skills</h3>
        <ul>
          {
            data.skills.map((el, i) => 
            <li key={i}>{el}</li>
            )
          }
        </ul>
    </div>
    <div className="summary area">
      {data.personal_summary}
    </div>
    <div className="education area">
      <h3>Education</h3>
      {
        data.education.map((el, i) => 
          <div key={`ed-${i}`}>
            <h4>{el.title}</h4>
            {el.location} - {el.date}<br/>
            {el.grade}<br/>
          </div>
        )
      }
    </div>
    <div className="interests area">
      <h3>Interests</h3>
      {data.interests}
    </div>
    <div className="details area">
      <h3>Personal Details</h3>
      <FontAwesomeIcon className="icon" icon={ faMapMarkerAlt }/> {data.personal_details.location}<br/>
      <a href={`mailto:${data.personal_details.email}`}><FontAwesomeIcon className="icon" icon={ faEnvelope }/> {data.personal_details.email}</a><br/>
      <a href={data.personal_details.linkedin}><FontAwesomeIcon className="icon" icon={ faLinkedin }/> {data.personal_details.linkedin}</a><br/>
      <a href={data.personal_details.github}><FontAwesomeIcon className="icon" icon={ faGithubSquare }/> {data.personal_details.github}</a><br/>
    </div>
    <div className="experience area">
      <h3>Experience</h3>
      {
        data.experience.map((el, i) => 
          <div key={`ex-${i}`}>
            <h4>{el.title} - {el.location}</h4>
            {el.from_date} - {el.to_date}<br/>
            <ul>
              {
                el.info.map((inf, i) => 
                  <li key={`inf-${i}`}>{inf}</li>
                )
              }
            </ul>
          </div>
        )
      }
    </div>
  </Layout>
)

export default IndexPage
