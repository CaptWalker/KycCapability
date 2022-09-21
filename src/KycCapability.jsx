import React from 'react';
import { Card, CardHeader, CardBody,Container,Row,Col } from 'reactstrap';

function KycCapability() {
  return (
    <Card className='w-100' color='danger' outline>
      <CardHeader>KYC Capability</CardHeader>
      <CardBody><b>User Details</b></CardBody>
      <Container>
  
  <Row xs="2">
    <Col className="bg-light border">
      User Name
    </Col>
    <Col className="bg-light border">
    Jacob Thornton
    </Col>
    <Col className="bg-light border">
      Address
    </Col>
    <Col className="bg-light border">
      London, United Kingdom
    </Col>
    <Col className="bg-light border">
      Country
    </Col>
    <Col className="bg-light border">
      United Kingdom
    </Col>
    <Col className="bg-light border">
      Date of Birth
    </Col>
    <Col className="bg-light border">
      16 March 1990
    </Col>
    <Col className="bg-light border">
      Phone Number
    </Col>
    <Col className="bg-light border">
      xxxxxxxxxx
    </Col>
  </Row>
  </Container>
    </Card>
  );
}

export default KycCapability;
