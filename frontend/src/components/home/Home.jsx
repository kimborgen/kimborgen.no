import React, { Component } from 'react';
import './Home.css';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';

export default class Home extends Component {
  render() {
	  var hello = []
	  for (let i = 0; i < 100; i++) {
		  hello.push(<div>"hello, world!" <br/></div>)
	  }
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
