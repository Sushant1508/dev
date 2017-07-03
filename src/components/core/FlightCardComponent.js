import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
//import TextField from 'material-ui/TextField';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const paperStyle = {
  margin: 20,
  backgroundColor:'white',
      height: 120
};


 const FlightCardComponent =()=>{
  return(
        <Paper zDepth={2} style={paperStyle}>
          <Container fluid={'true'}>
          <Row>
            <Col xs="12" md="10">
            <Row>
              <Col xs="2" md="2">
                <img ng-src="https://4ctnedevblob.blob.core.windows.net/assets/9W.png" alt="Jet Airways" src="https://4ctnedevblob.blob.core.windows.net/assets/9W.png"/>
                                   <div className="airportcode">
                                      Jet Airways
                                  </div>
                                   <div className="airportcode ">
                                      9W - 665
                                  </div>
                </Col>
                <Col xs="3" md="3">
                <div style={{align:'center'}}><b className="ng-binding">02:10</b></div>
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
                                <div layout="row" layout-align="center" >
                                  {/*  <img src="/assets/images/arrow-thin.png"/> */}
                                </div>
                </Col>


                <Col xs="4" md="4">
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
                  <div class="pricetext">AUD 130.50</div>
            </Row>
            </Col>
            </Row>

          </Container>
        </Paper>
);
};
export default FlightCardComponent;
