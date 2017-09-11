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
				<h2 className="personalStatement">Personal Statement</h2>
				<p className="personalStatement__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur bsDuis aute irure</p>
				<div className="divider__top"></div>
				<h2 className="education">Education</h2>
				<div className="education__wrapper">
					<div className="education__degree"><b>M.S in Computer Science & Engineering, 2015-2020, at </b></div>
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
					<p>Html, css & js</p>
					<p>Django & rails</p>
					<p>Python, go & java</p>
					<p>Servers & sysadmin</p>
					<p>Graphical Design</p>
					<p>Film, editing & 3D</p>



				</div>
			</section>
		</div>
    );
  }
  //jeg har en fin penis
}
