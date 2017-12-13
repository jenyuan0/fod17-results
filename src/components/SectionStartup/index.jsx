import React from 'react'
import './section-startup.css'
import startupHeading from '../../images/startup-heading.svg'

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
        <div className="g-flex g-center">
          <div className="startup-content">
            <div className="section-title cr-white"><span>5</span>Design Startup</div>
            <img className="startup-heading" src={startupHeading} alt="Winner takes all" />
            <h1 className="title">{title}</h1>
            <div className="startup-copy" dangerouslySetInnerHTML={createMarkup(copy)}></div>
          </div>
          <div className="startup-image">
            <img src={image} alt="Design Startup" />
          </div>
        </div>
        <div id="startup-graph">
          <div className="graph-content">
            {subsections}
          </div>
        </div>
      </div>
    </section>
  )
}

const SubSection = ({subsection, idx}) => {
  const bar_width = subsection.subsectionGraphicPercentage
  const bar_style = {
    width: bar_width + '%'
  };
  return (
    <div key={idx} className="bar">
      <h3 className="bar-title">{subsection.subsectionTitle}</h3>
      <div className="bar-percentage">{subsection.subsectionGraphicPercentage}</div>
      <div className="bar-fill" data-fill={subsection.subsectionGraphicPercentage}style={bar_style}></div>
    </div>
  )
}


const createMarkup = (__html) => ({__html})

export default SectionStartup