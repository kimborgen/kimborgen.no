import React, { Component } from 'react';
import './Home.css';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';

export default class Home extends Component {
  render() {
	  var hello = []
	  hello.push("hei");
    return (
        <div className="home">
			<Nav />
			<p>
			{hello.map((h) => {
				return h
			})}
			</p>
			<Footer />
		</div>
    );
  }
}
