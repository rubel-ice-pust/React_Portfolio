import React, { Component, Fragment } from 'react'
import {Container, Row,Col,Button} from "react-bootstrap";
// import '../../asset/css/custom.css'
// import '../../asset/css/bootstrap.min.css'
import axios from 'axios';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
export default class TopBanner extends Component {


  constructor(){
    super();
    this.state={
      title:"...",
      subtitle:"..."

    }
  }

   componentDidMount(){
    RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
      this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle']})
    }).catch(error=>{
      this.setState({title:"Something Wrong !",subtitle:"Something Wrong !"})
    });
   }

  render() {
    return (
        <Fragment>
            <Container fluid="true" className="topFixedBanner p-0">

                <div className='topBannerOverlay'>
                    <Container className='topContent'>
                        <Row>
                            <Col className='text-center'>
                              <h1 className='topTitle'>{this.state.title}</h1>
                              <h4 className='topSubTitle'>{this.state.subtitle}</h4>
                              <Button variant="primary">More Info</Button>
                            </Col>
                        </Row>

                    </Container>

                </div>

           
            </Container>


        </Fragment>
    )
  }
}

