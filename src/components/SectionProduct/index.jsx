import React from 'react'
import './section-product.css'
import productHeading from '../../images/product-heading.svg'

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
      <div className="width">
        <div className="product-content">
          <div className="section-title"><span>2</span>Designers + Product</div>
          <img className="product-heading" src={productHeading} alt="Who really runs the show here?" />
          <h1 className="title">{title}</h1>
          <div className="product-copy" dangerouslySetInnerHTML={createMarkup(copy)}></div>
        </div>
        <div className="business-image">
          <img src={image} alt="Designers + Product" />
        </div>
        <div id="product-graph">
          <h2 className="type-large">Ratio of designer to Product Managers:</h2>
        </div>
      </div>
    </section>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionProduct