import React from 'react'
import './section-product-practices.css'

const SectionProductPractices = ({
  copy,
  image,
  link,
  linkTitle,
  sectionName,
  subsections,
  title
}) => {

  return (
    <section className="section-product-practices bg-lightred" name={sectionName} id={sectionName}>
    <div className="width g-flex g-center">
      <div className="practices-title">
        <h1 className="type-large">{title}</h1>
      </div>
      <div className="practices-content" dangerouslySetInnerHTML={createMarkup(copy)}></div>
    </div>
    </section>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionProductPractices