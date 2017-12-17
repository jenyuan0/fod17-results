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

  const stripped_copy = copy.replace(/(<([^>]+)>)/ig,"");

  return (
    <section className="section-slideshow bg-gray" name={sectionName} id={sectionName}>
    <div className="width w-small">
      <h1 className="type-large">View full 2017 results</h1>
      <div className="slideshow-content">
        <div className="slideshow-frame"><iframe title="Slideshow" src={stripped_copy} frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div>
        <img src={image} alt="Design Startup" />
      </div>
      <div className="slideshow-link">
        <a href={link}>{linkTitle}</a>
      </div>
    </div>
    </section>
  )
}

export default SectionSlideshow