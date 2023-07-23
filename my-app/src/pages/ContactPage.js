import React, { Component, Fragment } from 'react'
import ContactSection from '../components/ContactSection/ContactSection'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'

export default class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
         <TopNavigation title='Contact'/>
        <PageTop pageTitle='Contact' />
        <ContactSection/>
        <Footer/>
      </Fragment>
      
    )
  }
}
