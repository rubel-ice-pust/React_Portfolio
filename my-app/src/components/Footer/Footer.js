import React, { Component, Fragment} from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='footerSection'>
          <Row>
            <Col lg={3} md={6} sm={12}>
            <h1 className='serviceName'>Follow Me</h1>
            </Col>

            <Col lg={3} md={6} sm={12}>
            <h1 className='serviceName'>Address</h1>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <h1 className='serviceName'>Information</h1>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <h1 className='serviceName'>Legal</h1>            
            </Col>
          
          </Row>  
        </Container>
        
    
      </Fragment>
    )
  }
}
