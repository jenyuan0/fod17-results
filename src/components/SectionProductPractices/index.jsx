import React from 'react'
import './section-product-practices.css'

var scrollToElement = require('scroll-to-element');


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
        <p onClick={() => scrollToElement('.section-slideshow', { offset:-55, align: 'top', duration:900,ease:'inOutExpo'})}><span>See more in full report</span></p>
      </div>
      <div className="practices-content" dangerouslySetInnerHTML={createMarkup(copy)}></div>
    </div>
    </section>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionProductPractices