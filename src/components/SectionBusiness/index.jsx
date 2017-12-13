import React from 'react'
import './section-business.css'
import businessHeading from '../../images/business-heading.svg'

const SectionBusiness = ({
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

    <section className="section-business bg-lightblue" name={sectionName} id={sectionName}>
      <div className="width">
        <div className="g-flex g-center">
          <div className="business-content">
            <div className="section-title cr-blue"><span>1</span>Design + Business</div>
            <img className="business-heading" src={businessHeading} alt="Right brain. Please meet left brain" />
            <h1 className="title">{title}</h1>
            <div className="business-copy cr-blue" dangerouslySetInnerHTML={createMarkup(copy)}></div>
          </div>
          <div className="business-image">
            <img src={image} alt="Design + Business" />
          </div>
        </div>
        <div id="business-graph">
          <h2 className="type-large cr-blue">What parts of business should designers understand?</h2>
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

export default SectionBusiness