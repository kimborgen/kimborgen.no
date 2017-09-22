import React, { Component } from 'react';
import './About.css';
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;



export default class About extends Component {
  render() {
    return (
        <section className="about">
			<h1>About me <Element className="element" name="myScrollToElement"></Element></h1>
			<img src="http://via.placeholder.com/42x42" />

            <article>
                <h2>Student</h2>
                <p>Hello world! My name is Kim borgen. I am 21 year old student from Norway. I am currently studying a 5 year MSc in computer science & engineering with a specialization in Artificial Inteligence, databases & search and Neuroscience at the Norwegian University of Science and Technology (NTNU) in Trondheim.</p>
            </article>

            <article>
                <h2>Volunteer, Entrepenour & Visonary</h2>
                <p><i>"I want to make the world a better place"</i> is just empty words before you actually create. My vision is to show, not to tell, that you can make a better world. Today it is by volunteering in things I strongly belive will impact the future in a meaningfull way. Tommorow it is by creating solutions & businesses that defies the status quo.</p>
            </article>

            <div className="about__divider"></div>
		</section>
    );
  }
}

/*


<div></div>

<article>
    <h2>Scientist</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>

<article>
    <h2>Entrepenour</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>
<img src="http://via.placeholder.com/42x42" />
*/
