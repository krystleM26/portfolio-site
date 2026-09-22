import React, { Component } from 'react'
import AboutMenu from './AboutMenu.js'
import Avatar from '../avatar/Avatar.js'

export default class About extends Component {
  render() {
    return (
      <section className="page about-container">
        <div className="about-hero">
          <Avatar page="about" />
          <div>
            <p className="eyebrow">Writer turned developer</p>
            <h1 className="display">Hi, I’m Krystle.</h1>
            <p className="lede">
              A full-stack developer building thoughtful, human-centered web
              apps with JavaScript, React, and Node.js.
            </p>
          </div>
        </div>

        <AboutMenu />
      </section>
    );
  }
}
