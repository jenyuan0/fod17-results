import React, { Component } from 'react'
import camelCase from 'lodash.camelcase'

class Section extends Component {
  render() {
    const title = this.props.title
    const sectionName = this.props.sectionName
    const copy = { __html: this.props.copy}


    const image = this.props.image ? <div className="image"><img src={this.props.image} alt="" /></div> : ''

    const link = this.props.link ? <a className="link" href={this.props.link}>{this.props.linkTitle}</a> : ''

    var subsections = ''

    if (this.props.subsections) {
      subsections = this.props.subsections.map((subsection, idx) => {

        const subsectionName = camelCase(subsection.subsectionTitle)
        const { subsectionCopy } = subsection

        const subsectionImageSRC = subsection.subsectionImage
        const subsectionImage = <img src={subsectionImageSRC} alt="" />

        return (
          <div key={idx} className={`subsection ${subsectionName}`} >
            <div className='image'>{subsectionImage}</div>
            <h3 className='title'>{subsection.subsectionTitle}</h3>
            <p className='subtitle'>{subsection.subsectionSubTitle}</p>
            <p className="copy" dangerouslySetInnerHTML={createMarkup(subsectionCopy)}></p>
            <a className='link' href={subsection.subsectionLink}>{subsection.subsectionLinkTitle}</a>
          </div>
        )
      })
    }

    return (
      <section className={sectionName} name={sectionName} id={sectionName}>

        <div className='wrapper'>

          <div className="content">

            <h1 className="title">> {title}</h1>
            <div className="copy" dangerouslySetInnerHTML={copy}></div>
            <div className="subsections">{subsections}</div>
            {link}

          </div>

          {image}

        </div>

      </section>
    )
  }
}

const createMarkup = (__html) => ({__html})

export default Section