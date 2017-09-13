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
                <h2 className="intrests">Main areas of intrests</h2>
                <ul className="intrests__bullet1">
                    <li>Blockchain & Ethereum</li>
                    <li>Artificial Intelligence</li>
                </ul>
                <ul className="intrests__bullet2">
                    <li>Full-stack web-development</li>
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
                <p className="experiences__ascend__description">In charge of communcation & marketing for the voluntary based student organization <a href="http://ascendntnu.no">Ascend NTNU</a>. Head of the communcation group with 4 people. I am also a board member. It is my task to bring Ascend NTNU's image to new heights. Not only for the students at NTNU but also for businesses and press nationwide. To do that I dvelve into the areas of social media marketing, sponsorships, events, graphical design, web development & design and brand building.</p>
                <p className="experiences__xcom__date">March 2017 - Present</p>
                <h3 className="experiences__xcom__header">Full-stack web-developer & sysadmin at <a href="https://xcom18.abakus.no" target="newtab">XCOM 2018</a></h3>
                <p className="experiences__xcom__description">Sole developer and sysadmin for the exursion comitee at Abakus, a student organization for MSc's in CS & CommTech. I refreshed the design on our website, and I am currrently responsible for further web-development, data managment, and server setup & maintenance. The website can be visited at <a href="https://xcom18.abakus.no" target="newtab">xcom18.abakus.no</a></p>
                <p className="experiences__isfit__date">April 2016 - March 2017</p>
                <h3 className="experiences__isfit__header">Full-stack web-developer at ISfIT 2017</h3>
                <p className="experiences__isfit__description">A member of the IT group at the <a href="https://isfit.org" target="newtab">ISfIT festival in 2017</a>. Worked with a team of 10 people. My main area of responsibility was developing our internal site with another developer, this internal site served close to 500 people.</p>
                <div className="divider__experiences__bottom"><div></div></div>
                <div className="divider__bottom"></div>

			</section>
		</div>
    );
  }
  //jeg har en fin penis
}
