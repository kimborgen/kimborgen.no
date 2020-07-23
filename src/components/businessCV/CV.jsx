import React, { Component } from 'react'
import './CV.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

var Scroll = require('react-scroll')
var Element = Scroll.Element

class BusinessCV extends Component {
  render () {
    return (
      <div className='business_wrapper__cv'>
        <Element className='element' name='scrollToCV' />
        { this.props.location.pathname.toLowerCase() === '/cv' || this.props.location.pathname.toLowerCase() === '/businesscv' ? undefined : <div className="cvlinks">Click for a printable CV page<Link to='/cv' className='cvlink'>Standard tech CV</Link><Link to='/businesscv'>Business CV</Link></div> }
        <section className='business_cv'>
          <h1>Kim Aksel Tahuil Borgen</h1>

          <div className='cvPicture' />

          <h2 className='intrests'>Main areas of interest</h2>
          <ul className='intrests__bullet1'>
            <li>Blockchain, smart contracts & decentralized apps</li>
            <li>AI & big data</li>
          </ul>
          <ul className='intrests__bullet2'>
            <li>Business development & project managment</li>
            <li>Marketing & film</li>
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
            <p>Leadership and managment</p>
            <p>Scientific research</p>
            <p>Project planning and scrum</p>
            <p>International financial law</p>
            <p>Video and photography</p>
            <p>Automation and big data</p>
            <div /><div />
            <p>Business development</p>
            <p>Analytical reasoning</p>
            <p>Teamwork and facilitating</p>
            <p>Graphical design</p>
            <p>Software development</p>
            <p>Blockchain applications</p>
          </div>

          <h2 className='experiences'>Experiences</h2>

          <p className='experiences__dexternal__date'>June 2017 - Present</p>

          <p className='experiences__ascend__date'>July 2017 - August 2018</p>


          <div className='experiences__text'>

            <h3 className='experiences__dexternal__header'>CEO & Smart Contract Dev at <a href='https://dexternal.com' target='newtab'>Dexternal</a></h3>
            <p className='experiences__dexternal__description'>CEO, Founder & Smart contract developer at Dexternal, a startup dedicated to connecting blockchain assets to the regulated environment of the real world through a fully decentralized crypto asset exchange compliant with Norwegian and international law. As a CEO I work with business development, strategy, law, funding, and project planning and management. I am responsible for a team of five developers, managing, motivating and leading them towards reaching our goals. I am also researching theoretical solutions, designing decentralized architectures and implementing them as smart contracts on the Ethereum blockchain in Solidity.</p>

            <h3 className='experiences__ascend__header'>Head of Marketing & Communication at <a href='https://ascendntnu.no' target='newtab'>Ascend NTNU</a></h3>
            <p className='experiences__ascend__description'>In charge of marketing and communication at Ascend NTNU, a student organization that compete internationally with autonomous aerial robotics. I was in charge of the marketing group of 4 people and I was also a board member. Our work yielded up to 120% more applicants in our different recruiting phases, compared to the year before.</p>

          </div>

          <div className='divider__experiences__bottom'><div /></div>

          <div className='divider__bottom' />

          <h2 className='projects'>Other</h2>
          <ul className='projects__list'>
            <li>Technical group member - Film & Editing - Abakus Revue 2019</li>
            <li>Scene group member - Abakus Revue 2018</li>
            <li>Full Stack Web Developer & Sysadmin <br/>&emsp; at <a href='https://xcom19.abakus.no' target='newtab'>XCOM 2018</a>  (March 2017 - May 2018)</li>
            <li>Full Stack Web Developer <br />&emsp; at <a href='https://isfit.org' target='newtab'>ISFiT 2017</a> (April 2016 - March 2017)</li>
            <li>Summer assistant at the produce section <br/> &emsp; at Coop Obs Hypermarked Elverum (Summer 2013)</li>
          </ul>

          <h2 className='contact'>Contact Information</h2>
          <ul className='contact__list'>
            <li><a href='https://www.linkedin.com/in/kimborgen/' target='newtab'>linkedin.com/in/kimborgen</a><img src="https://www.crevita.no/wp-content/uploads/2016/01/LinkedIn-logo-300x300.png" /></li>
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

export default withRouter(BusinessCV)
