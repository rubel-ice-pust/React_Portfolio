import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'

export default class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <Row>
                <Col lg={12} md={12} sm={12} className='videoCard'>
                <div>
                    <p className='videoTitle'>How I Do</p>
                    <p>FirstI analysis the requirement of project According to the requirement.I make a proper technical analysis, then I build a software architecture.According to the planning I start coding Testing is also going on the coding.Final testing take place after finishing coding part.After successful implementation I provide 6 month free fixing service for corresponding project. </p>
                    <p className='videoDes'><FontAwesomeIcon onClick={this.modalOpen} className='playBtn' icon={faCirclePlay}></FontAwesomeIcon></p>
                </div>
                </Col>
            </Row>
        </Container>
        <Modal show={this.state.show} onHide={this.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Fragment>
    )
  }
}
