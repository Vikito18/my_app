import FormLastName from "../components/FormLastName";
import FormFirstName from "../components/FormFirstName";
import TitleRecovery from "../components/TitleRecovery";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonReturn from "../components/ButtonReturn";
import ButtonOk from "../components/ButtonOk";
import { Link } from "react-router-dom";
import FormMail from "../components/FormMail";



const PasswordRecovery = () => {

    return (
        <div>
            <TitleRecovery />
            <FormLastName />
            <FormFirstName />
            <FormMail />
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <Link to="/">
                            <ButtonReturn />
                        </Link>
                    </Col>
                    <Col>
                        <ButtonOk />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default PasswordRecovery;