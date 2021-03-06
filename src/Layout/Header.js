import classes from "./Header.module.css";
import Button from "../UI/Button";
import AuthContext from "../Store/auth-context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const authContextData = useContext(AuthContext);

  const logoutHandler = () => {
    authContextData.onLogout();
    history.replace("/login");
  };

  return (
    <div className="text-white flex flex-row">
      <h1 className="text-3xl p-5 grow">AniShare</h1>
      <div className="mt-2 flex lg:flex-row xs:flex-col">
        {authContextData.isLoggedIn && <Button content="Create" />}
        {authContextData.isLoggedIn && <Button content="Share" />}
        {authContextData.isLoggedIn && (
          <Button content="Logout" onClick={logoutHandler} />
        )}
      </div>
    </div>
  );
};

export default Header;
