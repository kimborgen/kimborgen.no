import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default class Nav extends Component {

    aboutMeClick = (e) => {
        console.log("yes");
        e.preventDefault();
        scroller.scrollTo('myScrollToElement', {
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
			<div className="nav__empty1"></div>
			<a onClick={(e) => this.aboutMeClick(e)}>About me</a>
			<Link to="/cv">Curriculum Vitae</Link>
			<div className="nav__empty2"></div>
		</div>
    );
  }
}
