import React from 'react'
import './section-future.css'
import moneyHeading from '../../images/future-heading.svg'

const SectionFuture = ({
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

    <section className="section-future cr-white bg-blue" name={sectionName} id={sectionName}>
    <div className="width">
      <div className="g-flex g-center d-rtl">
        <div className="future-image">
          <img src={image} alt="Design in the Future" />
        </div>
        <div className="future-content">
          <div className="section-title cr-white"><span>4</span>Design in the Future</div>
          <img className="future-heading" src={moneyHeading} alt="We're not in Kansas anymore" />
          <h1 className="title">{title}</h1>
        </div>
      </div>

      <div className="future-copy future-copy-desktop" dangerouslySetInnerHTML={createMarkup(copy)}></div>
      <div className="future-graph future-graph-desktop">
        <div className="graph-heading">
          <h2><span className="type-large">Skills - Near Term:</span> <span>(by mention)</span></h2>
          <h2><span className="type-large">Skills - Further Out:</span> <span>(by mention)</span></h2>
        </div>
        <div className="graph-content">
          {subsections}
        </div>
      </div>

      <div className="future-copy future-copy-mobile" dangerouslySetInnerHTML={createMarkup(copy)}></div>
      <div className="future-graph future-graph-mobile">
        <div className="graph-heading">
          <h2><span className="type-large">Skills - Near Term:</span> <span>(by mention)</span></h2>
          <h2><span className="type-large">Skills - Further Out:</span> <span>(by mention)</span></h2>
        </div>
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
    <div key={idx} className="bar" data-break={subsection.subsectionSubTitle}>
      <h3 className="bar-title">{subsection.subsectionTitle}</h3>
      <div className="bar-percentage">{subsection.subsectionGraphicPercentage}</div>
      <div className="bar-fill" data-fill={subsection.subsectionGraphicPercentage}style={bar_style}></div>
    </div>
  )
}


const createMarkup = (__html) => ({__html})

export default SectionFuture