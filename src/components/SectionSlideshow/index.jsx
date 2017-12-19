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
    
    <section className="section-slideshow bg-gray" name={sectionName} id={sectionName} ref={(section) => { this.slides = section; }}>
    <div className="width">
      <h1 className="type-large">View Full 2017 Results</h1>
      <div className="slideshow-content">
        <div className="slideshow-frame"><iframe title="Slideshow" src={stripped_copy} frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div>
        <img src={image} alt="Design Startup" />
      </div>
      <div className="slideshow-link">
        <a href={link} target="_blank">{linkTitle}</a>
      </div>
    </div>
    </section>
  )
}

export default SectionSlideshow