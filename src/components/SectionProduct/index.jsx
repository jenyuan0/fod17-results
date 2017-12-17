import React from 'react'
import './section-product.css'
import productHeading from '../../images/product-heading.svg'
import productChart from '../../images/product-chart.svg'

const SectionProduct = ({
  copy,
  image,
  link,
  linkTitle,
  sectionName,
  subsections,
  title
}) => {

  return (
    <section className="section-product" name={sectionName} id={sectionName}>
      <div className="width g-flex g-center d-rtl">
        <div className="product-image">
          <img src={image} alt="Designers + Product" />
        </div>
        <div className="product-content">
          <div className="section-title"><span>2</span>Designers + Product</div>
          <img className="product-heading" src={productHeading} alt="Who really runs the show here?" />
          <h1 className="title">{title}</h1>
          <div className="product-copy" dangerouslySetInnerHTML={createMarkup(copy)}></div>
        </div>
      </div>
      <div id="product-graph" className="width w-medium">
        <h2 className="type-large">Ratio of designer to Product Managers:</h2>
        <div id="product-graph-chart" className="g-flex">
          <div id="chart">
            <div id="chart-image">
              <div className="g-flex">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img src={productChart} alt="Product Chart" />
            </div>
            <div id="chart-x-axis" className="g-flex">
              <div className="x-axis"><span>Early Stage</span></div>
              <div className="x-axis"><span>Mid Stage</span></div>
              <div className="x-axis"><span>Late Stage</span></div>
            </div>
          </div>
          <div id="chart-y-axis">
          <div className="g-flex g-vertical">
            <div className="y-axis"><span></span><span className="text">1:1</span></div>
            <div className="y-axis"><span></span><span className="text">1:2</span></div>
            <div className="y-axis"><span></span><span className="text">1:4</span></div>
            <div className="y-axis"><span></span><span className="text">1:10</span></div>
            <div className="y-axis"><span></span><span className="text">Designers are PMs</span></div>
            <div className="y-axis"><span></span><span className="text">No PMs</span></div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionProduct