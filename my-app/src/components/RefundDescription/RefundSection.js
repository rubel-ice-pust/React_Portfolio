import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default class RefundSection extends Component {
  render() {
    return (
        <Fragment>
        <Container className='mt-5'>
        <Row>
          <Col sm={12} lg={12} md={12}>
            <ul>
                <li>Your item must be unused and in the same condition that you received it.</li>
                <li>The item must be in the original packaging.</li>
                <li>To complete your return, we require a receipt or proof of purchase</li>
                <li>Only regular priced items may be refunded, sale items cannot be refunded.</li>
                <li>If the item in question was marked as a gift when purchased and shipped directly to you, you will receive a gift credit for the value of your return.</li>
                <li>If you have not received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.</li>
                <li>If you have done all of this and you still have not received your refund yet, please contact us at (email and or phone number)</li>
                <li>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</li>
                
            </ul>
          </Col>
        </Row>
        </Container>
      </Fragment>
    )
  }
}
