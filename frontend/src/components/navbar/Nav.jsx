import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
        <div className="nav">
			<Link to="/">Hjemlink</Link>
		</div>
    );
  }
}
