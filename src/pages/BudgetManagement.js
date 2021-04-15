import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const BudgetManagement = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="col text-center ">Gestion de budget</h1>
                </div>
            </div>
            <Card className="bg-dark text-white m-3" style={{ width: "20rem" }}>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#">Detail</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Couleur</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Item>
                                Supprimer
                            </Nav.Item>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="m-3 d-flex justify-content-around">Nourriture</Card.Title>
                    <Card.Text className="m-3 d-flex justify-content-around">
                        <InputGroup>
                            <Form.Control type="number" placeholder="entrer somme" />
                            <InputGroup.Append>
                                <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-dark text-white m-3" style={{ width: "20rem" }}>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#">Detail</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Couleur</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Item>
                                Supprimer
                            </Nav.Item>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="m-3 d-flex justify-content-around">Facture</Card.Title>
                    <Card.Text className="m-3 d-flex justify-content-around">
                        <InputGroup>
                            <Form.Control type="number" placeholder="entrer somme" />
                            <InputGroup.Append>
                                <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-dark text-white m-3" style={{ width: "20rem" }}>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#">Detail</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Couleur</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Item>
                                Supprimer
                            </Nav.Item>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="m-3 d-flex justify-content-around">Entretient maison</Card.Title>
                    <Card.Text className="m-3 d-flex justify-content-around">
                        <InputGroup>
                            <Form.Control type="number" placeholder="entrer somme" />
                            <InputGroup.Append>
                                <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
            <InputGroup>
                <Form.Control type="number" placeholder="entrer somme" />
                <InputGroup.Append>
                    <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default BudgetManagement;