import { Container, Row, Col } from "react-bootstrap";
import RecipeDescription from "./RecipeDescription";
import Ingredients from "./Ingredients";
import RecipeTitle from "./RecipeTitle";
import "../../../../App.css";

export default function Recipe() {
  const style1 = {
    width: "100%",
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url('images/coconut-curry-chickpeas.jpeg')",
    backgroundSize: "cover",
  };

  return (
    <Container fluid style={{ background: "#fdfcfa" }}>
      <Row>
        <Col style={style1}></Col>
      </Row>
      <RecipeTitle />
      <RecipeDescription />
      <Ingredients />
    </Container>
  );
}
