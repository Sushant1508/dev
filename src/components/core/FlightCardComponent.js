import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
//import TextField from 'material-ui/TextField';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const paperStyle = {
  margin: 20,
  backgroundColor:'white'
};

const Eminities =(props)=>{
  return(
    <Row>
      <Col md-offset="3" md="5" style={{borderWidth: '1px', borderColor: 'rgb(189, 189, 189)', backgroundColor: 'rgb(245, 245, 245)', color: 'rgba(0, 0, 0, 0.87)'}}>
      <Row>
            <Col md="1" className="material-icons"   style={{color: 'rgb(158, 158, 158)'}}>restaurant</Col>
            <Col  md="3">
              <div className="viewmoredetails-text" >&nbsp;Snack or Brunch</div>
            </Col>

            <Col md="1" className="material-icons"   style={{color: 'rgb(158, 158, 158)'}}>business_center</Col>
            <Col  md="3">
              <div className="viewmoredetails-text" >&nbsp;Baggage : 15&nbsp;kg</div>
            </Col>


            <Col  md="4">
              <div className="viewmoredetails-text" >Check-in : N/A</div>
            </Col>
      </Row>
      </Col>
    </Row>
  );

};

 class FlightCardComponent extends React.Component {
   constructor () {
   super();
   this.state = {
     isHidden: false
   };

    this.toggleHidden=this.toggleHidden.bind(this);
 }

 toggleHidden () {
   this.setState({
     isHidden: !this.state.isHidden
   });
 }



  render(){
  return(
        <Paper zDepth={2} style={paperStyle}>
          <Container fluid={'true'}>
          <Row>
            <Col>
                <div  style={{backgroundColor: 'green' , width : '25px' ,borderBottomRightRadius: '5px'}} className="booking-itenerary-left-icon">
                  <i className="material-icons">flight_takeoff</i>
                </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="10">
            <Row>
              <Col md="2" xs="2" xs-offset="1" md-offset="1" >
                <img alt="Jet Airways" src="https://4ctnedevblob.blob.core.windows.net/assets/9W.png"/>
                                  <div className="airportcode">
                                      Jet Airways
                                  </div>
                                  <div className="airportcode ">
                                      9W - 665
                                  </div>
                </Col>
                <Col xs="3" md="3">
                <div style={{align:'center'}}><b>02:10</b></div>
                                <div className="viewmoredetails-address">
                                  <div  >
                                    Jul 10, 2017, BLR
                                    </div>
                                </div>
                                <div className="viewmoredetails-address ">
                                    Bengaluru Intl Airport, india
                                </div>
                                <div className="viewmoredetails-address">
                                    Terminal Not Available
                                </div>
                </Col>
                <Col xs="2" md="2">
                    <div className="duration ">2h 30min</div>
                    <i className="material-icons">trending_flat</i>
                </Col>


                <Col xs="3" md="3">
                    <div><b >04:40</b></div>
                    <div className="viewmoredetails-address">
                      <div >Jul 10, 2017, CCU</div>

                    </div>
                    <div className="viewmoredetails-address ">Kolkata Netaji Subhas Chandra, india</div>
                    <div className="viewmoredetails-address ">Terminal Not Available</div>
                </Col>

            </Row>
            </Col>
            <Col xs="12" md="2">
            <Row>
                  <div className="pricetext">AUD 130.50</div>
            </Row>
            </Col>
            </Row>
            <Row>
              &nbsp;
            </Row>

            {this.state.isHidden && <Eminities/>}
            <Row>
              &nbsp;
            </Row>
            <Row>
            <div  role="button" >
              <span onClick={this.toggleHidden} className="booking-itenerary-viewmore cursor" style={{backgroundColor: 'rgb(46, 125, 50)', color: 'rgba(255, 255, 255, 0.87)',marginLeft: '45%'}}>View More</span>
              <div style={{backgroundColor: 'green',height: '2px'}}></div>
            </div>
            </Row>

          </Container>
        </Paper>
      );
    }
}
export default FlightCardComponent;
