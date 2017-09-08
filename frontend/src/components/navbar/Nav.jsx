import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
        <div className="nav">
			<div className="nav__empty1"></div>
			<Link to="/">Hjemlink</Link>
			<Link to="/">Hjemlink</Link>
			<Link to="/">Hjemlink</Link>
			<div className="nav__empty2"></div>
		</div>
    );
  }
}
