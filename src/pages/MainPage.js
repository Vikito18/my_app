import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Setting from "../components/Setting";
import Update from "../components/Update";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";








function MainPage() {
    return (
        <div>
            <Container fluid className="bg-info p-3">
                <Row>
                    <Col>
                        <h1 className="col text-center ">MasterCash</h1>
                    </Col>
                </Row>
            </Container>
            <SignIn />
            <SignUp />
            <Setting />
            <Update />
        </div>
    );
}
export default MainPage;
