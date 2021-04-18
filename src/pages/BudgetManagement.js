import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonReturn from "../components/ButtonReturn";
import { Link } from "react-router-dom";
import AccountIcon from "../components/AccountIcon";
import SettingIcon from "../components/SettingIcon";


const BudgetManagement = () => {
    return (
        <div>
            <Container className="bg-info p-3">
                <Row>
                    <Col>
                        <Link to="/SettingAccount">
                            <AccountIcon />
                        </Link>
                    </Col>
                    <Col>
                        <div>
                            <h1 className="text-center">Gestion de budget</h1>
                        </div>
                    </Col>
                    <Col>
                        <Link to="/">
                            <ButtonReturn />
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Link to="/GeneralSetting">
                <Container className="d-flex justify-content-end">
                    <SettingIcon />
                </Container>
            </Link>
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <InputGroup>
                            <Form.Control className="text-center bg-success text-white" type="number" placeholder="total" />
                            <InputGroup.Append>
                                <InputGroup.Text className="basic-addon2 bg-success">€</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Card className="bg-dark text-white m-3">
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
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white m-3">
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="bg-dark text-white m-3">
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
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white m-3">
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
                                <Card.Title className="m-3 d-flex justify-content-around">Loisirs</Card.Title>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BudgetManagement;