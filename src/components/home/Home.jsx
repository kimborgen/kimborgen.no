import React, { Component } from 'react'
import './Home.css'
import Nav from '../navbar/Nav'
import Footer from '../footer/Footer'
import About from '../about/About'
import CV from '../cv/CV'

export default class Home extends Component {
  render () {

    return (
      <div className='home'>
        <header className='home__header'>
          <Nav />
        </header>
        <div className='content'>
          <About />
          <CV />
        </div>
        <Footer />
      </div>
    )
  }
}
