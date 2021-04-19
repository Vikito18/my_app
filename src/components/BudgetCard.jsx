import { Form, Card, Nav, InputGroup } from "react-bootstrap";

const BudgetCard = (props) => {
  const {
    data: { title },
  } = props;
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="details">
          <Nav.Item>
            <Nav.Link eventKey="details">Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="color">Color</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-danger"
              onClick={() => console.log("TODO DELETE")}
            >
              Delete
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title className="d-flex justify-content-around">
          {title}
        </Card.Title>
        <div className="m-3 d-flex justify-content-around">
          <InputGroup>
            <Form.Control type="number" placeholder="entrer somme" />
            <InputGroup.Append>
              <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
