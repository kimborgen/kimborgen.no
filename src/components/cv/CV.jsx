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
        { this.props.location.pathname === '/cv' ? undefined : <Link to='/cv' className='cvlink'>Click here for a printable CV page</Link> }
        <section className='cv'>
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

          <h2 className='skills'>Skills</h2>
          <div className='skills__wrapper'>
            <img src='skills_circle.svg' />
            <img src='skills_circle.svg' />
            <img src='skills_circle.svg' />
            <img src='skills_circle.svg' />
            <img src='skills_circle.svg' />
            <img src='skills_circle.svg' />
            <div /><div />
            <p>Frontend & graphical enviroments</p>
            <p>Backend, Web Server & Software Architecture</p>
            <p>Python, JavaScript, Go, C++ & Java</p>
            <p>Project & Team Managment</p>
            <p>Video production & graphical design</p>
            <p>Smart Contracts and Decentralized Architecture</p>
          </div>

          <h2 className='experiences'>Experiences</h2>

          <p className='experiences__dexternal__date'>June 2017 - Present</p>

          <p className='experiences__ascend__date'>July 2017 - August 2018</p>

          <p className='experiences__isfit__date'>April 2016 - March 2017</p>

          <div className='experiences__text'>

            <h3 className='experiences__dexternal__header'>CEO & Smart Contract Dev at <a href='https://dexternal.com' target='newtab'>Dexternal</a></h3>
            <p className='experiences__dexternal__description'>CEO, Founder & Smart contract developer at Dexternal, a startup dedicated to connect blockchain assets to the regulated environment of the real world through a fully decentralized crypto asset exchange compliant with Norwegian and international law. As a CEO I work with business development, strategy, law, funding, and project planning and management. I am responsible for a team of five developers, managing, motivating and leading them towards reaching our goals. I am also researching theoretical solutions, designing decentralized architectures and implementing them as smart contracts on the Ethereum blockchain in Solidity.</p>

            <h3 className='experiences__ascend__header'>Head of Marketing & Communication at <a href='https://ascendntnu.no' target='newtab'>Ascend NTNU</a></h3>
            <p className='experiences__ascend__description'>In charge of marketing and communication at Ascend NTNU, a student organization that compete internationally with autonomous aerial robotics. I was in charge of the marketing group of 4 people and I was also a board member. Our work yielded up to 120% more applicants in our different recruiting phases, compared to the year before.</p>

            <h3 className='experiences__isfit__header'>Full Stack Web Developer at <a href='https://isfit.org' target='newtab'>ISFiT 2017</a></h3>
            <p className='experiences__isfit__description'>I was a member of the IT group at the <a href='https://isfit.org' target='newtab'>ISFiT festival in 2017</a>, working with a team of 10 people. My main area of responsibility was developing our internal site with another developer. This internal site served close to 500 people. </p>
          </div>

          <div className='divider__experiences__bottom'><div /></div>

          <div className='divider__bottom' />

          <h2 className='projects'>Other</h2>
          <ul className='projects__list'>
            <li>Technical group member - Film & Editing - Abakus Revue 2019</li>
            <li>Scene group member - Abakus Revue 2018</li>
            <li>Full Stack Web Developer & Sysadmin <br/>&emsp; at <a href='https://xcom19.abakus.no' target='newtab'>XCOM 2018</a>  (March 2017 - May 2018)</li>
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
