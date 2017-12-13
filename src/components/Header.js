import React, { Component } from 'react'
import './Header.css'
import { ShareButtons } from 'react-share';
import twitter from '../images/icon-twitter.svg';
import linkedin from '../images/icon-linkedin.svg';

const { TwitterShareButton, LinkedinShareButton } = ShareButtons;

class Header extends Component {
  render() {
    return (

      <header>
        <div className='wrapper'>

          <div className='left'>
            <a href="http://www.nea.com" target="_blank" rel="noopener noreferrer">
              <svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.15 25">
                <path fill="#fff" d="M53.8.44h-3.65l-2.64 6.24 4.09 8.71h-6.44l-.52 1.39h7.62l3.84 8.15h11.05c-2.33-.95-3.82-4.36-5-6.83z"/>
                <path fill="#fff" d="M25.38.44h-3.93c2.29 1.6 3.93 3 3.93 8.6v15.89h21.25L43.84 19c-1.62 2.49-4.68 5-10.2 5V13.28s2.76.83 5.53 4.85V7.26c-2.77 4.09-5.53 4.68-5.53 4.68V1.4c6 0 8.8 2.86 10.3 5.44L46.63.46H25.38z"/>
                <path fill="#fff" d="M23.45 12.62L12.29.45H0c1.71 1 4.14 2.58 4.14 7.57v9.63a8.07 8.07 0 0 1-3.89 7.29h9a8.05 8.05 0 0 1-3.89-7.29V5.29l18.07 19.72V12.63zM57.91 1.84A1.85 1.85 0 0 1 59.79 0a1.84 1.84 0 1 1-1.88 1.84zm3.4 0a1.52 1.52 0 1 0-1.52 1.52 1.46 1.46 0 0 0 1.52-1.53zm-2.2-.93h.7a.6.6 0 0 1 .74.57.49.49 0 0 1-.33.49l.44.74h-.53l-.37-.65h-.13v.65h-.51V.9zm.68.83a.22.22 0 0 0 .26-.22.21.21 0 0 0-.26-.21h-.17v.4h.17z"/>
              </svg>
            </a>
          </div>

          <div className='title'>
            2017 Call for Submissions
          </div>

          <div className='right links'>
            <a className='results link' href='http://2016.futureof.design/' target='_blank' rel="noopener noreferrer">2016 Results</a>
            <div className='social'>
              <TwitterShareButton
                url={'http://futureof.design/'}
                title={"Help uncover how great design works in start-ups along w/ @Spotify @Casper @InVisionApp @Etsy here:"}
                hashtags={['futureofdesign']}
              >
                <img className='logo-twitter' src={twitter} alt="twitter logo" />
              </TwitterShareButton>
            </div>
            <div className='social'>
              <LinkedinShareButton
                title={"Future Of Design by NEA"}
                url={'futureof.design'}
                description={"Help uncover how great design works in start-ups along w/ @Spotify @Casper @InVisionApp @Etsy here: futureof.design #futureofdesign"}
              >
                <img className='logo-linkedin' src={linkedin} alt="linkedin logo" />
              </LinkedinShareButton>
            </div>
          </div>

        </div>
      </header>
    )
  }
}

export default Header