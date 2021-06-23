import React, { useCallback, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import FormAccountName from "../components/FormAccountName";
import FormPassword from "../components/FormPassword";
import { Button } from "react-bootstrap";
import Page, { PageContent, PageHeader } from "../components/Page";

const parts = [
  <>
    <FormAccountName />
    <FormPassword />
  </>,
];

const SignIn = () => {
  const history = useHistory();
  const [part, setPart] = useState(0);
  const handleSubmit = useCallback(() => {
    if (part >= parts.length - 1) {
      history.push("/BudgetManagement");
    }

    return setPart(part + 1);
  }, [history, part]);
  const handleBack = useCallback(() => {
    if (part <= 0) {
      history.push("/");
    }

    return setPart(part - 1);
  }, [history, part]);

  return (
    <Page>
      <PageHeader noMenu>Sign In</PageHeader>
      <PageContent>
        {parts[part]}
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <Button size="lg" variant="light" onClick={handleBack}>
                Back
              </Button>
            </Col>
            <Col>
              <Button size="lg" onClick={handleSubmit}>
                {part === parts.length - 1 ? "Submit" : "Next"}
              </Button>
            </Col>
          </Row>
        </Container>
      </PageContent>
    </Page>
  );
};
export default SignIn;

