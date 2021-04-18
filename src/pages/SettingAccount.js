import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ButtonOk from "../components/ButtonOk";
import ButtonReturn from "../components/ButtonReturn";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



const SettingAccount = () => {


    return (

        <div>
            <div className="container-fluid bg-info p-3">
                <div className="row">
                    <h1 className="col text-center ">Paramètre du compte</h1>
                </div>
            </div>
            <div className="row-12 text-center">
                <Link to="/AccountNameModify">
                    <Button type="button" className="col-8 btn btn-secondary text-center m-3">Modifier nom compte</Button>
                </Link>
            </div>
            <div className="row-12 text-center">
                <Link to="/MailModify">
                    <Button type="button" className="col-8 btn btn-secondary text-center m-3">Modifier adresse mail</Button>
                </Link>
            </div>
            <div className="row-12 text-center">
                <Link to="/SettingAccount">
                    <Button type="button" className="col-8 btn btn-secondary text-center m-3">Modifier la date de fin de mois</Button>
                </Link>
            </div>
            <div className="row-12 text-center">
                <Link to="/">
                    <Button type="button" className="col-8 btn btn-secondary text-center mt-3 mb-3">Supprmimer la gestion de budget</Button>
                </Link>
            </div>
            <div className="row-12 text-center">
                <Link to="/">
                    <Button type="button" className="col-8 btn btn-secondary text-center mt-3 mb-5">Quiter la gestion de budget</Button>
                </Link>
            </div>
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <Link to="/BudgetManagement">
                            <ButtonReturn />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/BudgetManagement">
                            <ButtonOk />
                        </Link>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};
export default SettingAccount;