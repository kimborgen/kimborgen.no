import React, { Component } from 'react';
import './Home.css';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';

export default class Home extends Component {
  render() {
	  var hello = []
      /*
      for (let i = 0; i < 100; i++) {
          hello.push(<div style={{color:"red"}}>hei</div>)
      }
      */

    return (
        <div className="home">
            <header className="home__header">
                <Nav />
            </header>
            <div className="content">
                
            </div>
			<Footer />
		</div>
    );
  }
}
