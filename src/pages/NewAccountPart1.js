import FormLastName from "../components/FormLastName";
import FormFirstName from "../components/FormFirstName";
import PhoneNumber from "../components/PhoneNumber";
import TitleSignUp from "../components/TitleSignUp";
import React from "react";
import ButtonReturn from "../components/ButtonReturn";
import ButtonOk from "../components/ButtonOk";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";



const NewAccountPart1 = () => {

    return (
        <div>
            <TitleSignUp />
            <FormLastName />
            <FormFirstName />
            <PhoneNumber />
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <Link to="/MainPage">
                            <ButtonReturn />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/NewAccountPart2">
                            <ButtonOk />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default NewAccountPart1;