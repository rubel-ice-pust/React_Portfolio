import React, { Component, Fragment } from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import CoursesPage from '../pages/CoursesPage';
import Portfolio from '../pages/Portfolio';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
                <Routes>

                    <Route  path="/" Component={HomePage}/>
                    <Route  path="/service" Component={ServicePage}/>
                    <Route  path="/course" Component={CoursesPage}/>
                    <Route  path="/portfolio" Component={Portfolio}/>
                    <Route  path="/contact" Component={ContactPage}/>
                    <Route  path="/about" Component={AboutPage}/>
                    <Route  path="/Refund" Component={RefundPage}/>
                    <Route  path="/Terms" Component={TermsPage}/>



                </Routes>
            </Fragment>
      
    )
  }
}
