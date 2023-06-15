import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class PageTop extends Component {
  render() {
    return (
      <Fragment>

        <Container fluid="true" className="topPageBanner p-0">

        <div className='topPageOverlay'>
            <Container className='topPageContent'>
                <Row>
                    <Col className='text-center'>
                    <h1 className='topPageTitle'>{this.props.pageTitle}</h1>
                    
                    </Col>
                </Row>

            </Container>

        </div>


        </Container>
      
      </Fragment>
    )
  }
}
