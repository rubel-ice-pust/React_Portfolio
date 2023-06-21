import React, { Component,Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class PrivacyDescription extends Component {
  render() {
    return (
        <Fragment>
        <Container className='mt-5'>
        <Row>
          <Col sm={12} lg={12} md={12}>
            <p className='serviceDescription text-justify'>
            A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. It explicitly describes whether that information is kept confidential, or is shared with or sold to third parties.Privacy is not a new concept. Humans have always desired privacy in their social as well as private lives. But the idea of privacy as a human right is a relatively modern phenomenon.For individuals to feel comfortable sharing their personal information on the internet, there should be some sort of legal responsibility on businesses to protect that data and keep the users informed about the status and health of their information.            </p>
          </Col>
        </Row>
        </Container>
      </Fragment>
    )
  }
}
