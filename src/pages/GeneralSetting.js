import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Page, { PageContent, PageHeader } from "../components/Page";






const GeneralSetting = () => {


  return (
    <Page>
      <PageHeader noMenu>
        Gestion de budget
      </PageHeader>
      <PageContent>

        <Container className="d-flex justify-content-center mt-5">
          <Dropdown as={ButtonGroup} size="lg">
            <Dropdown.Toggle id="dropdown-custom-1">Langage</Dropdown.Toggle>
            <Dropdown.Menu className="bg-secondary text-white">
              <Dropdown.Item as="button">Français</Dropdown.Item>
              <Dropdown.Item as="button">Anglais</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
        <Container className="mt-5 p-3 mb-2 bg-secondary text-white">
          <Row>
            <Col className="custom-control custom-switch">
              <label className="custom-control-label" htmlFor="customSwitch1">Activer la mise à jour automatique</label>
            </Col>
            <Col>
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
            </Col>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center mt-5">
          <Dropdown as={ButtonGroup} size="lg">
            <Dropdown.Toggle id="dropdown-custom-1">Couleur du théme</Dropdown.Toggle>
            <Dropdown.Menu className="super-colors bg-secondary text-white">
              <Dropdown.Item as="button">Sombre</Dropdown.Item>
              <Dropdown.Item as="button">Claire</Dropdown.Item>
              <Dropdown.Item as="button">Bleu</Dropdown.Item>
              <Dropdown.Item as="button">Orange</Dropdown.Item>
              <Dropdown.Item as="button">Violet</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
        <Container className="d-flex justify-content-center mt-5 mb-5">
          <Dropdown as={ButtonGroup} size="lg">
            <Dropdown.Toggle id="dropdown-custom-1">Unité de monnaie</Dropdown.Toggle>
            <Dropdown.Menu className="super-colors bg-secondary text-white">
              <Dropdown.Item as="button">Euro</Dropdown.Item>
              <Dropdown.Item as="button">Dollar</Dropdown.Item>
              <Dropdown.Item as="button">Yen</Dropdown.Item>
              <Dropdown.Item as="button">Livre Sterling</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>

      </PageContent>
    </Page>
  );
};
export default GeneralSetting;