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

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";


const MainMenu = () => {
  return (
  
    <DropdownButton clasName="bg-primary" title="☰">
      <Dropdown.Item href="/SignIn">Account</Dropdown.Item>
      <Dropdown.Item href="/GeneralSetting">Setting</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/">Quit</Dropdown.Item>
    </DropdownButton>
      
      
  );
};

export default MainMenu;
