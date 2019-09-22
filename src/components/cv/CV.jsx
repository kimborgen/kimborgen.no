import React, { Component } from 'react'
import './CV.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

var Scroll = require('react-scroll')
var Element = Scroll.Element

class CV extends Component {
  render () {
    console.log(this.props.location.pathname)
    console.log(this.props.location.pathname === '/CV')
    return (
      <div className='wrapper__cv'>
        <Element className='element' name='scrollToCV' />
        { this.props.location.pathname.toLowerCase() === '/cv' || this.props.location.pathname.toLowerCase() === '/businesscv' ? undefined : <div className="cvlinks"><Link to='/cv'>Click for printable CV</Link></div> }
        <section className='cv'>
          <h1>Kim Aksel Tahuil Borgen</h1>

          <div className='cvPicture' />

          <h2 className='intrests'>Main areas of interest</h2>
          <ul className='intrests__bullet1'>
            <li>Blockchain & Smart Contracts</li>
            <li>Artificial Intelligence & Big Data</li>
          </ul>
          <ul className='intrests__bullet2'>
            <li>Startup & Entrepreneurship</li>
            <li>Marketing, Film and Photo</li>
          </ul>

          <div className='divider__top' />

          <h2 className='education'>Education</h2>
          <div className='education__wrapper'>
            <div className='education__degree'><b>MSc in Computer Science & Engineering, 2015-2020, specializing in Databases & Search</b></div>
            <a href='www.ntnu.edu'>At the Norwegian University of Science and Technology (NTNU) in Trondheim </a>
          </div>

          <h2 className='skills'>.</h2>
          <h2 className='skills_real'>Skills</h2>
          <div className='skills__wrapper'>
            <p>AI and ML development</p>
            <p>Big data and data processing</p>
            <p>Blockchain and applications</p>
            <p>Software architechure</p>
            <p>Full stack web development</p>
            <p>European financial law</p>
            <div /><div />
            <p>Leadership and managment</p>
            <p>Scientific research and writing</p>
            <p>Project planning and scrum</p>
            <p>Python, Go, JS, C++, Java ...</p>
            <p>Numpy, Pandas, Pytorch, Unix ...</p> 
            <p>Solidity, React, QT, and Django</p>
          </div>

          <h2 className='experiences'>Experiences</h2>

          <p className='experiences__dexternal__date'>June 2017 - Present</p>

          <p className='experiences__ascend__date'>June 2019 - August 2019</p>

          <p className='experiences__isfit__date'>March 2017 - August 2018</p>

          <div className='experiences__text'>

            <h3 className='experiences__dexternal__header'>Founder and CEO at <a href='https://dexternal.com' target='newtab'>Dexternal</a></h3>
            <p className='experiences__dexternal__description'>Dexternal is a blockchain startup dedicated to connect blockchain assets to the regulated environment of the real world through a fully decentralized crypto asset exchange compliant with Norwegian and international law. As a CEO I work with business development, strategy, law, funding, project planning and management of our development team. I am also researching theoretical solutions, designing decentralized architectures and implementing them as smart contracts on the Ethereum blockchain in Solidity.</p>

            <h3 className='experiences__ascend__header'>Machine Learning Developer (Summer Intern) at <a href="https://infrontfinance.com">Infront</a></h3>
            <p className='experiences__ascend__description'>Developed on a machine learning pipeline to automate tedious human tasks using the deep learning framework PyTorch, and various other data science libraries. Also developed web tools for data analysis and labeling.</p>

            <h3 className='experiences__isfit__header'>Head of Marketing & Communication at <a href='https://ascendntnu.no' target='newtab'>Ascend NTNU</a></h3>
            <p className='experiences__isfit__description'>In charge of marketing and communication at Ascend NTNU, a student organization that compete internationally with autonomous aerial robotics. I was in charge of the marketing group of 4 people and I was also a board member. Our work yielded up to 120% more applicants in our different recruiting phases, compared to the year before.</p>
          </div>

          <div className='divider__experiences__bottom'><div /></div>

          <div className='divider__bottom' />

          <h2 className='projects'>Other</h2>
          <ul className='projects__list'>
            <li>Scene builder and technical worker - Film & Editing - <br />&emsp; at the Abakus Revue 2018, 2019 and 2020</li>
            <li>Full Stack Web Developer & Sysadmin <br/>&emsp; at <a href='https://xcom19.abakus.no' target='newtab'>XCOM 2018</a>  (March 2017 - May 2018)</li>
            <li>Full Stack Web Developer <br/>&emsp; at <a href='https://isfit.org' target='newtab'>ISFiT 2017</a> (April 2016 - March 2017)</li>

            <li>Summer assistant at the produce section <br/> &emsp; at Coop Obs hypermarked Elverum (Summer 2013)</li>
          </ul>

          <h2 className='contact'>Contact Information</h2>
          <ul className='contact__list'>
            <li><a href='https://github.com/kimborgen' target='newtab'>github.com/kimborgen</a><img src="https://image.flaticon.com/icons/svg/25/25231.svg" /></li>
            <li><a href='mailto:me@kimborgen.com'>me@kimborgen.com</a> <i className="material-icons">email</i></li>
            <li><a href='http://kimborgen.com' target='newtab'>kimborgen.com</a> <i className="material-icons">public</i></li>
            <li>24-05-1996 <i className="material-icons">cake</i></li>
            <li>48357052 <i className="material-icons">phone</i></li>
          </ul>

        </section>
      </div>
    )
  }
}

export default withRouter(CV)
