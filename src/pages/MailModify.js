import React from "react";
import ButtonOk from "../components/ButtonOk";
import ButtonReturn from "../components/ButtonReturn";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import FormMail from "../components/FormMail";
import Form from "react-bootstrap/Form";



const MailModify = () => {
    return (
        <div>
            <Container fluid className=" bg-info p-3">
                <Row>
                    <Col>
                        <h1 className="text-center ">Modifier adresse mail </h1>
                    </Col>
                </Row>
            </Container>
            <FormMail />
            <Form>
                <Form.Group className="m-5" controlId="mail">
                    <Form.Label>Nouvelle adresse mail</Form.Label>
                    <Form.Control type="name" placeholder="Enter mail" />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group className="m-5" controlId="mail">
                    <Form.Label>Valider adresse mail</Form.Label>
                    <Form.Control type="name" placeholder="Enter mail " />
                </Form.Group>
            </Form>
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <Link to="/SettingAccount">
                            <ButtonReturn />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/SettingAccount">
                            <ButtonOk />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MailModify;