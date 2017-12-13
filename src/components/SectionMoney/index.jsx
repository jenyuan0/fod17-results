import React from 'react'

import './section-money.css'
import moneyHeading from '../../images/money-heading.svg'

const SectionMoney = ({
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

    <section className="section-money cr-white bg-red" name={sectionName} id={sectionName}>
      <div className="width">
        <div className="g-flex g-center">
          <div className="money-content">
            <div className="section-title cr-white"><span>4</span>Design + Money</div>
            <img className="money-heading" src={moneyHeading} alt="Money talks." />
            <h1 className="title">{title}</h1>
            <div className="money-copy" dangerouslySetInnerHTML={createMarkup(copy)}></div>
          </div>
          <div className="money-image">
            <img src={image} alt="Design + Money" />
          </div>
        </div>
        <div id="money-graph">
          <h2 className="type-large">Salaries in Design</h2>
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

export default SectionMoney