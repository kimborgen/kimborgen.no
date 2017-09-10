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
		<div className="cv__wrapper">
	        <section className="cv">
	            <h1>Curriculum Vitae</h1>
			</section>
		</div>
    );
  }
}
