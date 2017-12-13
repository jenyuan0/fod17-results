import React from 'react'
import './section-collaborators.css'

const SectionCollaborators = ({
  copy,
  image,
  link,
  linkTitle,
  sectionName,
  subsections,
  title
}) => {

  if (subsections) {
    subsections = subsections.map((subsection, idx) => 
      <SubSection subsection={subsection} key={idx} idx={idx} />
    )
  }
  return (
    <section className="section-collaborators cr-white bg-blue" name={sectionName} id={sectionName}>
      <div className="width g-flex">
        <div className="collaborators-content">
          <div className="g-flex g-vertical">
            <div className="collaborators-copy" dangerouslySetInnerHTML={createMarkup(copy)}></div>
            <div className="collaborators-image">
              <img src={image} alt="Design + Money" />
            </div>
          </div>
        </div>
        <div className="collaborators-partners">
          <div className="g-flex">
            {subsections}
          </div>
        </div>
      </div>
    </section>
  )
}

const SubSection = ({subsection, idx}) => {
  return (
    <div className="logo">
      <a href={subsection.link}>
        <img src={subsection.subsectionImage} alt="" />
      </a>
    </div>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionCollaborators