
import React, { Component } from 'react';
import './header.css'
import Typist from 'react-typist'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Typist 
          className="header__typist"
          cursor={{
            show: false,
          }}
          >
          <p>Hello!</p>
          <Typist.Delay ms={1000} />
          <p>Welcome to my fatnasstic hom
          <Typist.Backspace count={12} delay={150} />
          ntastic homepage!</p>
          <Typist.Delay ms={1000} />
          <p>Here you can 
            <Typist.Delay ms={300} /> .
            <Typist.Delay ms={300} /> . 
            <Typist.Delay ms={300} /> uhh 
            <Typist.Delay ms={300} /> see my <i className="header__instadesc">stunning</i> instagram feed
            <Typist.Delay ms={1000} />,
          </p>
          <p> and look at my <i className="header__cvdesc">profesional</i> CV
            <Typist.Delay ms={300} />. 
            <Typist.Delay ms={500} />
            <p>I mean... look at dem lines yo</p>
          </p>
          <Typist.Delay ms={1000} />
          <p>You can also follow me on social media.    
            <Typist.Delay ms={1000} /> plz. 
          </p>
          <Typist.Delay ms={1000} />
          <p>Enjoy!
            <Typist.Delay ms={2000} />
            <p>ps: scroll down</p>
          </p>
        </Typist> 

		  </div>
    );
  }
}

//<Typist.Delay ms={500} />
