import React from 'react';
import './section-intro.css'
import introHeading from '../../images/intro-heading.svg'
import introIllustrationLeft from '../../images/intro-illustration-left.png'
import introIllustrationRight from '../../images/intro-illustration-right.png'
import introArrowDown from '../../images/intro-arrow-down.svg'

var scrollToElement = require('scroll-to-element');

const SectionIntro = ({
  copy,
  image,
  link,
  linkTitle,
  sectionName,
  subsections,
  title
}) => {

  return (
    <section className="section-intro" name={sectionName} id={sectionName}>
      <div className="width">
          <img className="intro-heading" src={introHeading} alt="Future of Design in Start-Ups: 2017 Results" />

          <div className="intro-content">
            <h1 className="title">{title}</h1>
            <div className="intro-copy" dangerouslySetInnerHTML={createMarkup(copy)}></div>
            {link}
          </div>
      </div>
      <div className="intro-illustration-left">
        <img src={introIllustrationLeft} alt="Intro Illustration Left" />
      </div>
      <div className="intro-illustration-right">
        <img src={introIllustrationRight} alt="Intro Illustration Right" />
      </div>
      <div className="intro-arrow" onClick={() => scrollToElement('.section-business', { offset:-55, align: 'top', duration:900,ease:'inOutExpo'})}>
        <div className="cta">Explore top 5 insights</div>
        <img src={introArrowDown} alt="Intro Arrow Down" />
      </div>
      <div ref={(section) => { this.intro = section; }}></div>
    </section>
  )
}

const createMarkup = (__html) => ({__html})

export default SectionIntro