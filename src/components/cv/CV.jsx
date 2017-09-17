import React, { Component } from 'react';
import './CV.css';

export default class CV extends Component {
  render() {
	  var hello = []
	  /*
      for (let i = 0; i < 374; i++) {
          hello.push(<div style={{color:"blue"}}>hei</div>)
      }
	  */

    return (
		<div className="wrapper__cv">
	        <section className="cv">
	            <h1>Kim Borgen</h1>
				<p className="header__text">Visit <a href="kimborgen.no">kimborgen.no</a> for more information</p>


				<div className="cvPicture"></div>

                <h2 className="intrests">Main areas of interest</h2>
                <ul className="intrests__bullet1">
                    <li>Blockchain & Ethereum/Solidity</li>
                    <li>Artificial Intelligence</li>
                </ul>
                <ul className="intrests__bullet2">
                    <li>Full Sstack Web Development</li>
                    <li>Marketing & Design</li>
                </ul>


				<div className="divider__top"></div>

				<h2 className="education">Education</h2>
				<div className="education__wrapper">
					<div className="education__degree"><b>MSc in Computer Science & Engineering, 2015-2020, at </b></div>
					<a href="www.ntnu.edu">The Norwegian University of Science and Technology [NTNU]</a>
				</div>

				<h2 className="skills">Skills</h2>
				<div className="skills__wrapper">
					<img src="skills_circle.svg"></img>
					<img src="skills_circle.svg"></img>
					<img src="skills_circle.svg"></img>
					<img src="skills_circle.svg"></img>
					<img src="skills_circle.svg"></img>
					<img src="skills_circle.svg"></img>
					<div></div><div></div>
					<p>Html, css, js & react</p>
					<p>Django & rails</p>
					<p>Python, go & java</p>
					<p>Servers & sysadmin</p>
					<p>Graphical Design, Film & 3D</p>
					<p>Blockchain, Ethereum & Solidity</p>
				</div>


				<h2 className="experiences">Experiences</h2>

                <p className="experiences__ascend__date">July 2017 - Present</p>
                <h3 className="experiences__ascend__header">Communication Leader at <a href="http://ascendntnu.no" target="newtab">Ascend NTNU</a></h3>
                <p className="experiences__ascend__description">In charge of communcation & marketing for the voluntee based student organization <a href="http://ascendntnu.no">Ascend NTNU</a>. We compete in the most prestigious international competition for university students in aerial robotics. I am in charge of the communcation group of 4 people and I am also a board member. It is my task to bring Ascend NTNU's image to new heights, not only for the students at NTNU but also for businesses and the media. This involves dvelving into the areas of social-media marketing, sponsorships & events, graphic design, film & photo, web-design and brand building.</p>

                <p className="experiences__xcom__date">March 2017 - Present</p>
                <h3 className="experiences__xcom__header">Full Stack Web Developer & Sysadmin at <a href="https://xcom18.abakus.no" target="newtab">XCOM 2018</a></h3>
                <p className="experiences__xcom__description">Developer and sysadmin for the excursion commitee at Abakus, a student organization for MScs in CS & CommTech. I refreshed the design on our website, and I am currrently responsible for further web-development, data managment, and server setup & maintenance. The website can be visited at <a href="https://xcom18.abakus.no" target="newtab">xcom18.abakus.no</a>. <i>Keywords: CSS, Django & Server</i></p>

                <p className="experiences__isfit__date">April 2016 - March 2017</p>
                <h3 className="experiences__isfit__header">Full Stack Web Developer at <a href="https://isfit.org" target="newtab">ISfIT 2017</a></h3>
                <p className="experiences__isfit__description">I was a member of the IT group at the <a href="https://isfit.org" target="newtab">ISfIT festival in 2017</a>, working with a team of 10 people. My main area of responsibility was developing our internal site with another developer. This internal site served close to 500 people. <i>Keywords: Rails, JS, CSS</i></p>

                <div className="divider__experiences__bottom"><div></div></div>


                <div className="divider__bottom"></div>

                <h2 className="projects">Projects</h2>
                <ul className="projects__list">
                    <li><b><a href="https://stelios.no" target="newtab">Stelios.no - </a></b> Senior developer in a team of 4. Developing an idea from scratch to a finished product on the course <a href="http://www.ntnu.edu/studies/courses/TDT4140#tab=omEmnet" target="newtab">"Software Engineering"</a>. <i>Keywords: React, Django REST api, CSS, Continuous Integration, Servers, Testing, LEAN, Travis</i></li>
                    <li><b><a href="http://kimborgen.no" target="newtab">kimborgen.no - </a></b> My personal webpage. The frontend is made with React and the design is entirely made in CSS. I also made this CV as part of the website. The backend is a NodeJS server running on Google Cloud</li>
                    <li><b>Decentralized exchange built on Ethereum (in progress) - </b> The exchange is built upon smart contract code in Ethereum's programming language Solidity. </li>
                </ul>

                <h2 className="contact">Contact Information</h2>
                <ul className="contact__list">
                    <li><a href="https://github.com/kimborgen" target="newtab">github.com/kimborgen</a></li>
                    <li><a href="mailto:ceo@kimborgen.no">ceo@kimborgen.no</a></li>
                    <li><a href="http://kimborgen.no" target="newtab">kimborgen.no</a></li>
                    <li>24-05-1996</li>
                    <li>48357052</li>
                </ul>


			</section>
		</div>
    );
  }
  //jeg har en fin penis
}
