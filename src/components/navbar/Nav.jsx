import React, { Component } from 'react';
import './Nav.css';
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default class Nav extends Component {

    scrollTo = (e, name) => {
        e.preventDefault();
        scroller.scrollTo('scrollTo' + name, {
          duration: 1500,
          delay: 100,
          smooth: true,
          containerId: 'home',
          offset: -100,
        })
    }
  render() {
    return (
      <div className="nav">
        {/*<div className="nav__empty1"></div> */}
        <h1>Kim Aksel Tahuil Borgen</h1>
        <ul>
          <li>CEO, Founder & Smart Contract Dev Dexternal</li>
          <li>MSc CS Student NTNU</li>
          <li>Trondheim Norway</li>
          <li>22 years old</li>
        </ul>
        <a onClick={(e) => this.scrollTo(e, 'CV')}>CV</a>
        <a href="emailto:me@kimborgen.com">me@kimborgen.com</a>
		  </div>
    );
  }
}
