import React, { Component } from 'react'
import './About.css'
var Scroll = require('react-scroll')
var Element = Scroll.Element
var scroller = Scroll.scroller

export default class About extends Component {
  render () {
    return (
      <section className='about'>
        <Element className='element' name='scrollToAbout' />
        <img src='blockchain-ai.png' />

        <article>
          <h2>Passion</h2>
          <p>I believe emerging technologies such as <b>blockchain</b> and <b>artificial intelligence</b> has the ability to revolutionize and <b>disrupt</b> the status quo. These technologies allows us not only to rebuild old and uneffective systems, but to create new, <b>innovative</b> and <b>creative solutions</b> that will usher in a brand new globalized, automized and <b>decentralized</b> age.
          </p>
        </article>
      </section>
    )
  }
}