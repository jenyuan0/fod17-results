import React from 'react'
import './section-slideshow.css'

const SectionSlideshow = ({
  copy,
  image,
  link,
  linkTitle,
  sectionName,
  subsections,
  title
}) => {

  return (
    <section className="section-slideshow bg-gray" name={sectionName} id={sectionName}>
    <div className="width w-small">
      <h1 className="type-large">View full 2017 results</h1>
      <div className="slideshow-content">
        <div className="slideshow-frame" dangerouslySetInnerHTML={createMarkup(copy)}></div>
        <img src={image} alt="Design Startup" />
      </div>
      <div className="slideshow-link">
        <a href={link}>{linkTitle}</a>
      </div>
    </div>
    </section>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionSlideshow