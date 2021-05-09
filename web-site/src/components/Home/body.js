import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bio from './text/bio'

function BodyText() {

    return (
        <div>
          <Row><Col md={{span: 6, offset: 3 }} xs={6} className="text-Header"><h4>Professional Summary</h4></Col></Row>
          <Row><Col md={{span: 6, offset: 3 }} xs={6}><Bio/></Col></Row>
        <Row>
        <Col>this is a image</Col>
      </Row>
      <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
      </div>
    )
    
}

export default BodyText; 
