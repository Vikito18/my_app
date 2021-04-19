import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormAccountName from "../components/FormAccountName";
import Form from "react-bootstrap/Form";
import ButtonOk from "../components/ButtonOk";
import ButtonReturn from "../components/ButtonReturn";
import { Link } from "react-router-dom";



const AccountNameModify = () => {

  return (

    <div>

      <Container fluid className=" bg-info p-3">
        <Row>
          <Col>
            <h1 className="text-center ">Modifer nom du compte</h1>
          </Col>
        </Row>
      </Container>
      <FormAccountName />
      <Form>
        <Form.Group className="m-5" controlId="formBasicName">
          <Form.Label>Nouveau nom de compte</Form.Label>
          <Form.Control type="name" placeholder="Enter Account name" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group className="m-5" controlId="formBasicName">
          <Form.Label>Valider nom de compte</Form.Label>
          <Form.Control type="name" placeholder="Enter Account name" />
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

export default AccountNameModify;