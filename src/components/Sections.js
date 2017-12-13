import React from 'react'
import Section from './Section'

import SectionIntro from './SectionIntro'
import SectionBusiness from './SectionBusiness'
import SectionBusinessQuotes from './SectionBusinessQuotes'
import SectionProduct from './SectionProduct'
import SectionProductPractices from './SectionProductPractices'

import SectionMoney from './SectionMoney'
import SectionFuture from './SectionFuture'
import SectionFutureQuotes from './SectionFutureQuotes'
import SectionStartup from './SectionStartup'

import SectionSlideshow from './SectionSlideshow'
import SectionCollaborators from './SectionCollaborators'
import SectionAboutNea from './SectionAboutNea'
import SectionTeam from './SectionTeam'

import './Sections.css'

const Sections = ({sections, isLoading}) => {

  const mainSections = {
    'intro': SectionIntro,
    'business': SectionBusiness,
    'business-quotes': SectionBusinessQuotes,
    'product': SectionProduct,
    'product-practices': SectionProductPractices,
    'money': SectionMoney,
    'future': SectionFuture,
    'future-quotes': SectionFutureQuotes,
    'startup': SectionStartup,

    'slideshow': SectionSlideshow,
    'collaborators': SectionCollaborators,
    'about-nea': SectionAboutNea,
    'team': SectionTeam,
  }

  const content = sections.map((section, idx) => {
    let Handler = mainSections[section.sectionName] || Section
    return <Handler key={idx} {...section} />
  })

  return (
    <div className={`container ${isLoading ? 'isLoading' : ''}`}>
      {content}
    </div>
  )
}

export default Sections