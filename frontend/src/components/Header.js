import { useContext } from "react";
import { Link, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { CurrentAuthContext } from "../contexts/CurrentAuthContext";

function Header(props) {
  const currentUser = useContext(CurrentAuthContext);

  function handleSignOut () {
    props.handleSignOut();
  }

  return (
    <header className="header">
      <div className="logo"></div>

      <Switch>
        <Route path="/sign-in">
          <Link to="/sign-up" className="link header__link">
            <h2 className="signup__text">Регистрация</h2>
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in" className="link header__link">
            <h2 className="signup__text">Войти</h2>
          </Link>
        </Route>
        <Route path="/">
          <div className="header__title">
            <p className="header__text">
              {currentUser.email}
            </p>
            <Link to="/" className="link header__link" onClick={handleSignOut}>
              Выйти
            </Link>
          </div>
        </Route>
      </Switch>

    </header>
  )
}

export default Header;