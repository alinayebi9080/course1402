import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
    </>
  );
};

export default Header;
