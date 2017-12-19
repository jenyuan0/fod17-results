import React from 'react'
import './section-money.css'
import moneyHeading from '../../images/money-heading.svg'
import moneyChart from '../../images/money-chart.svg'
import moneyChartMobile from '../../images/money-chart-mobile.svg'

const SectionMoney = ({
  copy,
  image,
  link,
  linkTitle,
  sectionName,
  subsections,
  title
}) => {

  return (
    <section className="section-money cr-white bg-red" name={sectionName} id={sectionName}>
      <div className="width g-flex g-center d-rtl">
        <div className="money-image">
          <img src={image} alt="Design + Money" />
        </div>
        <div className="money-content">
          <div className="section-title cr-white"><span>4</span>Design + Money</div>
          <img className="money-heading" src={moneyHeading} alt="Money talks." />
          <h1 className="title">{title}</h1>
          <div className="money-copy" dangerouslySetInnerHTML={createMarkup(copy)}></div>
        </div>
      </div>
      <div id="money-graph" className="width w-small">
        <h2 className="type-large">Median Salaries in Design</h2>
        <div id="money-graph-chart">
          <div id="chart-image">
            <img src={moneyChart} alt="Money Chart" />
            <img id="chart-image-mobile" src={moneyChartMobile} alt="Money Chart" />
            <div className="chart-data">Lowest $47k <span></span></div>
            <div className="chart-data"><span>$70k</span></div>
            <div className="chart-data"><span>$90k</span></div>
            <div className="chart-data"><span>$100k</span></div>
            <div className="chart-data"><span>$110k</span></div>
            <div className="chart-data"><span>$75k</span></div>
            <div className="chart-data"><span>$105k</span></div>
            <div className="chart-data"><span>$125k</span></div>
            <div className="chart-data"><span>$160k</span></div>
            <div className="chart-data"><span>$85k</span></div>
            <div className="chart-data"><span>$115k</span></div>
            <div className="chart-data"><span>$140k</span></div>
            <div className="chart-data"><span>$175k</span></div>
            <div className="chart-data">Highest 252k <span></span></div>
          </div>
          <div id="chart-y-axis">
            <div className="y-axis">VP of Design</div>
            <div className="y-axis">Senior Product Designer</div>
            <div className="y-axis">Product Designer</div>
            <div className="y-axis">Junior Product Designer</div>
          </div>
          <div id="chart-x-axis" className="g-flex">
            <div className="x-axis"><span>Early Stage</span></div>
            <div className="x-axis"><span>Mid Stage</span></div>
            <div className="x-axis"><span>Late Stage</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionMoney