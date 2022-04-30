import { Row, Col } from "react-bootstrap";

export default function RecipeDescription() {
  return (
    <Row style={{ backgroundColor: "#fdfcfa", padding: "20px" }}>
      <Col lg="1" />
      <Col style={{ backgroundColor: "white", padding: "20px" }}>
        <p style={{ paddingBottom: "2px" }}>
          Curries are one of those meals that warm your heart and your belly,
          and tonight’s vegetarian version is no exception. Chickpeas, onion,
          and bell pepper get a super savory treatment in a coconut-based curry
          sauce. Toss that over rice, add a dollop of yogurt and a sprinkle of
          cilantro, and you have yourself one soul-satisfying meal.
        </p>
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
        <div>Total Time: 30 minutes</div>
        <div>Prep Time: 30 minutes</div>
        <div>Cooking difficulty: Easy</div>
      </Col>
      <Col lg="1" />
    </Row>
  );
}
