import React from 'react'
import twitter from '../images/icon-twitter.svg'
import email from '../images/icon-mail.svg'
import nea from '../images/logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer-wrapper'>
      <div className='footer'>
        <div className='left'>

          <img src={twitter} className='twitter' alt='twitter logo' />

          <div className='text-container'>
            #futureofdesign
            <br />
            Follow us here for survey results: <a href="https://twitter.com/nea" target="_blank" rel="noopener noreferrer">@NEA</a>
          </div>
        </div>
        <div className='center'>

          <img src={email} className='email' alt='email logo' />
          <div className='text-container'>
            <a href="mailto:design@nea.com">Click here for questions</a>
          </div>
        </div>
        <div className='center'>

          <div className='text-container'>
            Designed by <a target="_blank" rel="noopener noreferrer" href="http://takeagander.com/">Gander</a><br />
            Illustration by <a target="_blank" rel="noopener noreferrer" href="http://simonlandrein.com/">Simon Landrein</a><br />
            Built by <a target="_blank" rel="noopener noreferrer" href="http://jenyuan.com/">Jen Yuan</a>
          </div>
        </div>
        <div className='right'>
          <div className='text-container'>
            <a href="http://www.nea.com/" target="_blank" rel="noopener noreferrer"><img src={nea} className='nea' alt='NEA logo' /></a>
            <br />
            © 2017 New Enterprise Associates
          </div>
        </div>
      </div>
    </section >
  )
}

export default Footer
