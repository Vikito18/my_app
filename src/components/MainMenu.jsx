// TODO put in a menu
// const AccountSettingsButton = (
//   <Link to="/SettingAccount">
//     <AccountIcon />
//   </Link>
// );
// <Link to="/GeneralSetting">
//   <Container className="d-flex justify-content-end">
//     <SettingIcon />
//   </Container>
// </Link>

import { Button } from "react-bootstrap";

import classNames from "../classNames";

const MainMenu = (props) => {
  return (
    <Button
      size="lg"
      {...props}
      {...classNames("position-absolute end-0", props)}
    >
      ☰
    </Button>
  );
};

export default MainMenu;
