import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
        <section className="about">
			<h1>About me</h1>
			<img src="tmp_aboutme.jpg"></img>

            <article>
                <h2>Student</h2>
                <p>Hello world! My name is Kim borgen. I am 21 year old student from Norway. I am currently studying a 5 year masters in computer science/engineering with a specialization in Artificial Inteligence, databases & search and Neuroscience at the Norwegian University of Science and Technology (NTNU) in Trondheim.</p>
            </article>

            <article>
                <h2>Volunteer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>

            <div></div>

            <article>
                <h2>Scientist</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>

            <article>
                <h2>Entrepenour</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <img src="tmp_aboutme2.jpg"></img>
		</section>
    );
  }
}
