import FormLastName from "../components/FormLastName";
import FormFirstName from "../components/FormFirstName";
import PhoneNumber from "../components/PhoneNumber";
import TitleRecovery from "../components/TitleRecovery";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonReturn from "../components/ButtonReturn";
import ButtonOk from "../components/ButtonOk";
import { Link } from "react-router-dom";



const PasswordRecovery = () => {

    return (
        <div>
            <TitleRecovery />
            <FormLastName />
            <FormFirstName />
            <PhoneNumber />
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