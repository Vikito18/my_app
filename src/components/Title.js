import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Title = () => {

    return (
        <Container fluid className="bg-info p-3">
            <Row>
                <Col>
                    <h1 className="col text-center ">MasterCash</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Title;