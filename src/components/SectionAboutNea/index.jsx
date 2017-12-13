import React from 'react'
import camelCase from 'lodash.camelcase'
import './section-about-nea.css'

const SectionAboutNea = ({title, sectionName, copy, image, link, linkTitle, subsections}) => {

  if (subsections) {
    subsections = subsections.map((subsection, idx) => <SubSection subsection={subsection} key={idx} idx={idx} />)
  }

return (
    <section className="section-about-nea cr-blue bg-lightblue" name={sectionName} id={sectionName}>
      <div className="width g-flex">
        <div className="about-nea-belief">
          <h1 className="type-large">> {title}</h1>
          <div className="belief-copy" dangerouslySetInnerHTML={createMarkup(copy)}></div>
        </div>
        <div className="about-nea-company">{subsections}</div>
      </div>
    </section>
  )
}

const SubSection = ({subsection, idx}) => {
  const subsectionName = camelCase(subsection.subsectionTitle)
  const { subsectionCopy, subsectionImage } = subsection

  return (
    <div key={idx} className={`subsection ${subsectionName}`} >
      <div className='company-image'>
        <img src={subsectionImage} alt="" />
      </div>
      <div className="company-copy" dangerouslySetInnerHTML={createMarkup(subsectionCopy)}></div>
    </div>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionAboutNea