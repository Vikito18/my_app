import React from "react";
import LinkButton from "../components/LinkButton";

import Page, { PageContent, PageHeader } from "../components/Page";

const MainPage = () => {
  return (
    <Page>
      <PageHeader noMenu noBack>
        MasterCash
      </PageHeader>
      <PageContent className="d-flex flex-column gap-4 justify-content-center">
        <LinkButton size="lg" variant="primary" to="/SignUp">
          Sign Up
        </LinkButton>
        <LinkButton size="lg" variant="outline-primary" to="/Account">
          Sign In
        </LinkButton>
        <LinkButton size="lg" variant="outline-primary" to="/GeneralSetting">
          Settings
        </LinkButton>
        <LinkButton size="lg" variant="outline-primary" to="/Account">
          Account
        </LinkButton>
      </PageContent>
    </Page>
  );
};

export default MainPage;
