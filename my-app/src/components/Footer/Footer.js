import React, { Component, Fragment} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='text-center footerSection'>
          <Row>
            <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
            <h1 className='serviceName'>Follow Me</h1>
            <a className='socialLink' href='#'><FontAwesomeIcon  icon={faFacebook}></FontAwesomeIcon>Facebook</a><br/>
            <a className='socialLink' href='#'><FontAwesomeIcon  icon={faYoutube}></FontAwesomeIcon>YouTube</a>

            </Col>
            <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
            <h1 className='serviceName'>Address</h1>
            <p className='serviceDescription'>Bangabandhu Sheikh Mujibur Rahman Hall, PUST</p>
            <p className='serviceDescription'> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>rubel.pust06@gmail.com</p>
            <p className='serviceDescription'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>01795662879</p>
            </Col>

            <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
            <h1 className='serviceName'>Information</h1>
            <Link className='footerLink' to='/about'>About me</Link><br/>
            <a className='footerLink' href='#'>My Resume</a><br/>
            <Link className='footerLink' to='/contact'>Contact Me</Link>
            </Col>

            <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
            <h1 className='serviceName'>Legal</h1>  
            <Link className='footerLink' to='/Refund'>Refund Policy</Link><br/>
            <Link className='footerLink' to='/Terms'>Terms And Condition</Link><br/>
            <Link className='footerLink' to='/Privacy'>Privacy Policy</Link>         
            </Col>
          </Row>  
        </Container>

        <Container fluid={true} className='copyRight text-center'>
          <a href='#' className='copyRightLink' >rubel.com  @copy;  2023-2024</a>
        </Container>

      </Fragment>
    )
  }
}
