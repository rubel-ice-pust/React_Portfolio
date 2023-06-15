import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'

export default class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pageTitle='About Me' />
        <AboutDescription/>
        <Footer/>
      </Fragment>
    )
  }
}
