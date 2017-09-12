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
					<p>Html, css, js & react</p>
					<p>Django & rails</p>
					<p>Python, go & java</p>
					<p>Servers & sysadmin</p>
					<p>Graphical Design</p>
					<p>Film, editing & 3D</p>
				</div>
				<h2 className="experiences">Experiences</h2>
			</section>
		</div>
    );
  }
  //jeg har en fin penis
}
