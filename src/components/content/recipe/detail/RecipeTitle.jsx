import { Row, Col, Button } from "react-bootstrap";

export default function RecipeTitle() {
  return (
    <Row
      style={{
        marginTop: "-100px",
        backgroundColor: "#fdfcfa",
        padding: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19))"
      }}
    >
      <Col lg="1" />
      <Col
        style={{
          backgroundColor: "white",
          padding: "20px",
          paddingBottom: "0px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19))"
        }}
      >
        <h2 style={{ paddingBottom: "2px" }}>Coconut Curry with Chickpeas</h2>
        <h6>topped with Yogurt & served with Basmati Rice</h6>
      </Col>
      <Col
        lg="2"
        className="d-flex flex-column"
        style={{
          alignItems: "right",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <Button variant="success">Add to profile</Button>{" "}
      </Col>
      <Col lg="1" />
    </Row>
  );
}
