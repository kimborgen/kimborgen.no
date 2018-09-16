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
          <h1>Kim Borgen</h1>
          <p className='header__text'>Visit <a href='kimborgen.no'>kimborgen.com</a> for more information</p>

          <div className='cvPicture' />

          <h2 className='intrests'>Main areas of interest</h2>
          <ul className='intrests__bullet1'>
            <li>Blockchain & Ethereum/Solidity</li>
            <li>Artificial Intelligence</li>
          </ul>
          <ul className='intrests__bullet2'>
            <li>Full Stack Web Development</li>
            <li>Marketing, Film & Design</li>
          </ul>

          <div className='divider__top' />

          <h2 className='education'>Education</h2>
          <div className='education__wrapper'>
            <div className='education__degree'><b>MSc in Computer Science & Engineering, 2015-2020, specializing in Databases & Search</b></div>
            <a href='www.ntnu.edu'>At the Norwegian University of Science and Technology in Trondheim (NTNU)</a>
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
            <p>Html, css, js & react</p>
            <p>Django & rails</p>
            <p>Python, go & java</p>
            <p>Servers & sysadmin</p>
            <p>Graphical Design, Film & 3D</p>
            <p>Blockchain, Ethereum & Solidity</p>
          </div>

          <h2 className='experiences'>Experiences</h2>

          <p className='experiences__dexternal__date'>September 2017 - Present</p>
          <h3 className='experiences__dexternal__header'>CEO & Smart Contract Dev at <a href='https://dexternal.com' target='newtab'>Dexternal</a></h3>
          <p className='experiences__dexternal__description'>CEO, Founder & Smart contract developer at Dexternal, a startup dedicated to developing useful products with blockchain technologies. We are a part of the NTNU Accel Fintech incubator. I am responsible for a team of 5 developers, managing, motivating and leading them towards reaching our goals. I am also researching theoretical solutions, designing decentralized architectures and implementing them as smart contracts on the Ethereum blockchain in Solidity. I addition to that I work on business development, graphical design and social media.</p>

          <p className='experiences__ascend__date'>July 2017 - August 2018</p>
          <h3 className='experiences__ascend__header'>Head of Marketing & Communication at <a href='https://ascendntnu.no' target='newtab'>Ascend NTNU</a></h3>
          <p className='experiences__ascend__description'>In charge of marketing & communication at Ascend NTNU, a student organization that compete internationally with autonomous aerial robotics. I was in charge of the marketing group of 4 people and I was also a board member. Our work yielded 40% -> 120% more applicants in our different recruiting phases, compared to the year before. Areas: <i>social-media marketing, sponsorships & events, graphic design, film & photo, web design and brand building.</i> </p>

          <p className='experiences__isfit__date'>April 2016 - March 2017</p>
          <h3 className='experiences__isfit__header'>Full Stack Web Developer at <a href='https://isfit.org' target='newtab'>ISfIT 2017</a></h3>
          <p className='experiences__isfit__description'>I was a member of the IT group at the <a href='https://isfit.org' target='newtab'>ISfIT festival in 2017</a>, working with a team of 10 people. My main area of responsibility was developing our internal site with another developer. This internal site served close to 500 people. <i>Keywords: Rails, JS, CSS</i></p>

          <div className='divider__experiences__bottom'><div /></div>

          <div className='divider__bottom' />

          <h2 className='projects'>Other</h2>
          <ul className='projects__list'>
            <li><b>Full Stack Web Developer & Sysadmin at <a href='https://xcom18.abakus.no' target='newtab'>XCOM 2018</a> (March 2017 - May 2018)</b> Developer and sysadmin for the excursion commitee at Abakus, a student organization for MScs in CS & CommTech. I did a total redesign, expanded the functionality and worked with data managment. <i>Keywords: CSS, Django & Server</i></li>
            <li><b><a href='https://stelios.no' target='newtab'>Stelios.no (Spring 2017) - </a></b> Senior developer in a team of 4. Developing an idea from scratch to a finished product on the course <a href='http://www.ntnu.edu/studies/courses/TDT4140#tab=omEmnet' target='newtab'>"Software Engineering"</a>. <i>Keywords: React, Django REST api, CSS, CI, Servers, Travis</i></li>
            <li><b><a href='http://kimborgen.com' target='newtab'>kimborgen.com - </a></b> Personal webpage, including this CV, made with React and a lot of CSS. Hosted on Firebase</li>
          </ul>

          <h2 className='contact'>Contact Information</h2>
          <ul className='contact__list'>
            <li><a href='https://github.com/kimborgen' target='newtab'>github.com/kimborgen</a></li>
            <li><a href='mailto:me@kimborgen.com'>me@kimborgen.com</a></li>
            <li><a href='http://kimborgen.com' target='newtab'>kimborgen.com</a></li>
            <li>24-05-1996</li>
            <li>48357052</li>
          </ul>

        </section>
      </div>
    )
  }
}

export default withRouter(CV)
