import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
        <div className="nav">
			<div className="nav__empty1"></div>
			<Link to="/">About me</Link>
			<Link to="/">Curriculum Vitae</Link>
			<div className="nav__empty2"></div>
		</div>
    );
  }
}
