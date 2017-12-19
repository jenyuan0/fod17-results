import React from 'react'
import Slider from 'react-slick'
import './section-business-quotes.css'

const SectionBusinessQuotes = ({
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
      <div key={idx}><SubSection subsection={subsection} idx={idx} /></div>
    )
  }

  var slider_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="section-business-quotes cr-white bg-blue" name={sectionName} id={sectionName}>
    <div className="width g-flex g-center">
      <div className="quotes-title">
        <h1 className="type-large">{title}</h1>
      </div>
      <div className="quotes-slides">
        <Slider {...slider_settings}>
        {subsections}
        </Slider>
      </div>
    </div>
    </section>
  )
}

const SubSection = ({subsection, idx}) => {
  return (
    <div key={idx} className="slide">
      <blockquote dangerouslySetInnerHTML={createMarkup(subsection.subsectionCopy)}></blockquote>
      <div className="quote-logo">
        <img src={subsection.subsectionImage} alt="" />
        <div className="quote-byline">{subsection.subsectionSubTitle}</div>
      </div>
    </div>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionBusinessQuotes