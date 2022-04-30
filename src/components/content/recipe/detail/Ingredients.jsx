import { Row, Col } from "react-bootstrap";

export default function Ingredients() {
  return (
    <Row style={{ backgroundColor: "#fdfcfa", padding: "20px" }}>
      <Col lg="1" />
      <Col style={{ backgroundColor: "white", padding: "20px" }}>
        <h4 style={{ paddingBottom: "2px" }}>Ingredients</h4>
        <Row>
              <Col lg="6">Yello Onion</Col>
              <Col >1</Col>
        </Row>
        <Row>
              <Col lg="6">Tomato</Col>
              <Col >1 Kg</Col>
        </Row>
        <Row>
              <Col lg="6">Cilantro</Col>
              <Col >1 bunch</Col>
        </Row>
      </Col>
      <Col
        lg="3"
        className="d-flex flex-column"
        style={{
          alignItems: "right",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <div>Total Time: 30 minutes</div>
        <div>Prep Time: 30 minutes</div>
        <div>Cooking difficulty: Easy</div>
      </Col>
      <Col lg="1" />
    </Row>
  );
}
