import React from "react";
import { FormControl, InputGroup, Col, Row } from "react-bootstrap";

import Page, { PageContent, PageHeader } from "../components/Page";
import BudgetCard from "../components/BudgetCard";

const BudgetManagement = () => {
  return (
    <Page>
      <PageHeader noBack>Dashboard</PageHeader>
      <PageContent>
        <Row className="justify-content-center mb-3">
          <Col>
            <InputGroup size="lg">
              <FormControl
                className="text-center"
                type="number"
                placeholder="total"
              />
              <InputGroup.Append>
                <InputGroup.Text
                  style={{ borderRadius: 0, fontSize: "1.42em" }}
                  className="rounded-end"
                >
                  €
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row className="gy-3">
          {["Food", "Fun", "Bills", "Work", "House Keeping"].map((title) => (
            <Col sm={12} lg key={title}>
              <BudgetCard data={{ title }} />
            </Col>
          ))}
        </Row>
      </PageContent>
    </Page>
  );
};

export default BudgetManagement;
