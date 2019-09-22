
import React, { Component } from 'react';
import './header.css'
import Typist from 'react-typist'

export default class Header extends Component {
  constructor() {
    super()
    this.speed = 1

  }
  

  render() {
    return (
      <div className="header">
        <Typist 
          className="header__typist"
          cursor={{
            show: false,
          }}
          avgTypingDelay = {30}
          >
          <p>Hello!</p>
          <Typist.Delay ms={this.speed * this.speed * 1000} />
          <p>Welcome to my fatnasstic hom
          <Typist.Backspace count={12} delay={150} />
          ntastic homepage!</p>
          <Typist.Delay ms={this.speed * 1000} />
          <p>Here you can 
            <Typist.Delay ms={this.speed * 300} /> .
            <Typist.Delay ms={this.speed * 300} /> . 
            <Typist.Delay ms={this.speed * 300} /> . 
            <Typist.Delay ms={this.speed * 300} /> uhh 
            <Typist.Delay ms={this.speed * 300} /> see my <i className="header__instadesc">stunning</i> instagram feed
            <Typist.Delay ms={this.speed * 1000} />,
          </p>
          <p> and look at my <i className="header__cvdesc">professional</i> CV
            <Typist.Delay ms={this.speed * 300} />. 
            <Typist.Delay ms={this.speed * 500} />
            <p>I mean... look at dem lines yo</p>
          </p>
          <Typist.Delay ms={this.speed * 1000} />
          <p>You can also follow me on social media.    
            <Typist.Delay ms={this.speed * 3000} /> plz. 
          </p>
          <Typist.Delay ms={this.speed * 1000} />
          <p>Enjoy!
            <Typist.Delay ms={this.speed * 2000} />
            <p>ps: scroll down</p>
          </p>
        </Typist> 

		  </div>
    );
  }
}

//<Typist.Delay ms={this.speed * 500} />
