import React, { Component,Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'

export default class ProjectDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='Project Details'/>
        <PageTop pageTitle='Project Name' />
        <ProjectDetails/>
        <Footer/>
      </Fragment>
    )
  }
}
