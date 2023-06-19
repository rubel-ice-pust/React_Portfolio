import React, { Component,Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class TermsDescription extends Component {
  render() {
    return (
        <Fragment>
        <Container className='mt-5'>
        <Row>
          <Col sm={12} lg={12} md={12}>
            <p className='serviceDescription'>
            Your Terms and Conditions (T&C) is a contract between you and your customer. Customers must agree to your terms in order to browse your site, make purchases, or use any associated services. By laying the code of conduct for your site and how visitors interact with it, your T&C gives you legal cover in the case of any disputes which might arise.
            </p>
          </Col>
        </Row>
        </Container>
      </Fragment>
    )
  }
}
