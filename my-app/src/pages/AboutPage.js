import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'

export default class AboutPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title='About'/>
        <PageTop pageTitle='About Me' />
        <AboutDescription/>
        <Footer/>
      </Fragment>
    )
  }
}
