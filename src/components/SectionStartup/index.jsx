import React from 'react'
import './section-startup.css'
import startupHeading from '../../images/startup-heading.svg'

var scrollToElement = require('scroll-to-element');

const SectionStartup = ({
  copy,
  image,
  link,
  linkTitle,
  sectionName,
  subsections,
  title
}) => {

  if (subsections) {
    subsections = subsections.map((subsection, idx) => <SubSection subsection={subsection} key={idx} idx={idx} />)
  }

  return (

    <section className="section-startup cr-white bg-black" name={sectionName} id={sectionName}>
    <div className="width">
      <div className="g-flex g-center d-rtl">
        <div className="startup-image">
          <img src={image} alt="Design Startup" />
        </div>
        <div className="startup-content">
          <div className="section-title cr-white"><span>5</span>Design Startup</div>
          <img className="startup-heading" src={startupHeading} alt="Winner takes all" />
          <h1 className="title">{title}</h1>
          <div className="startup-copy">
            <div dangerouslySetInnerHTML={createMarkup(copy)}></div>
            <p onClick={() => scrollToElement('.section-slideshow', { offset:-55, align: 'top', duration:900,ease:'inOutExpo'})}><span>View the full list</span></p>
          </div>
        </div>
      </div>
      <div id="startup-graph" className="g-flex g-bottom">
        {subsections}
      </div>
    </div>
    </section>
  )
}

const SubSection = ({subsection, idx}) => {
  const bar_width = subsection.subsectionGraphicPercentage
  const bar_style = {
    height: bar_width*2 + 'px'
  };
  const { subsectionImage } = subsection
  return (
    <div className="startup">
      <img src={subsectionImage} alt="" />
      <div key={idx} className="bar">
        <div className="bar-fill" data-fill={subsection.subsectionGraphicPercentage}style={bar_style}></div>
      </div>
    </div>
  )
}


const createMarkup = (__html) => ({__html})

export default SectionStartup