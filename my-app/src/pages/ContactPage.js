import React, { Component, Fragment } from 'react'
import ContactSection from '../components/ContactSection/ContactSection'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'

export default class ContactPage extends Component {
  render() {
    return (
      <Fragment>
         <TopNavigation/>
        <PageTop pageTitle='Contact' />
        <ContactSection/>
        <Footer/>
      </Fragment>
      
    )
  }
}
