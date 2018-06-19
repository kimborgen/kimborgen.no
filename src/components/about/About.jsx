import React, { Component } from 'react'
import './About.css'
var Scroll = require('react-scroll')
var Element = Scroll.Element
var scroller = Scroll.scroller

export default class About extends Component {
  render () {
    return (
      <section className='about'>
        <h1>About me <Element className='element' name='scrollToAbout' /></h1>
        <img src='blockchain-ai.png' />

        <article>
          <h2>Passion</h2>
          <p>I believe emerging technologies such as <b>blockchain</b> and <b>artificial intelligence</b> has the ability to revolutionize and <b>disrupt</b> the current way of life. These technologies allows us not only to rebuild old and uneffective systems, but to create new, <b>innovative</b> and <b>creative</b> solutions that benefit <b>everyone</b> and will usher in a brand new globalized, automized and <b>decentralized</b> age.</p>
        </article>

        <div className='about__divider' />
      </section>
    )
  }
}

/*

<div></div>

<article>
    <h2>Scientist</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>

<article>
    <h2>Entrepenour</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>
<img src="http://via.placeholder.com/42x42" />
*/
