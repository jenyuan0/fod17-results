import React, { Component } from 'react'
import camelCase from 'lodash.camelcase'


import './section-team.css'

const SectionTeam = ({title, sectionName, copy, image, link, linkTitle, subsections}) => {

  if (subsections) {
    subsections = subsections.map((subsection, idx) => <SubSection subsection={subsection} key={idx} idx={idx} />)
  }

return (
    <section className="section-team cr-blue" name={sectionName} id={sectionName}>
      <div className="width">
        <h1 className="type-large">> {title}</h1>
        <div className="team-grid g-flex">
          {subsections}
        </div>
      </div>
    </section>
  )
}

const SubSection = ({subsection, idx}) => {
  const { subsectionCopy, subsectionImage } = subsection
  return (
    <div className="member">
      <img src={subsectionImage} alt="" />
      <h2 className="member-title type-large">{subsection.subsectionTitle}</h2>
      <div className="member-subtitle">{subsection.subsectionSubTitle}</div>
      <div className="member-link">
        <a href={subsection.subsectionLink}>{subsection.subsectionLinkTitle}</a>
      </div>
    </div>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionTeam