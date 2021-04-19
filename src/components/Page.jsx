import { useCallback } from "react";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";

import classNames from "../classNames";
import MainMenu from "./MainMenu";

const BackButton = (props) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <span onClick={handleClick} className="h2 position-absolute" {...props}>
      ⬅︎
    </span>
  );
};

export const PageHeader = (props) => {
  const { children, noMenu, noBack, ...otherProps } = props;

  return (
    <header
      {...otherProps}
      {...classNames(
        "d-flex align-items-center bg-primary px-2 py-3 position-fixed top-0 start-0 end-0 w-100",
        props
      )}
      style={{ zIndex: 100000 }}
    >
      {noBack ? null : <BackButton />}
      <h1 {...classNames("flex-grow-1 text-white text-center m-0", props)}>
        {children}
      </h1>
      {noMenu ? null : <MainMenu />}
    </header>
  );
};

export const PageContent = (props) => {
  const { noPadding, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      {...classNames(`flex-grow-1  ${noPadding ? "" : "p-3"}`, otherProps)}
      style={{ marginTop: 64 }}
    />
  );
};

const Page = (props) => (
  <Container
    as="main"
    fluid
    {...props}
    {...classNames("h-100 d-flex flex-column p-0", props)}
  />
);

export default Page;
