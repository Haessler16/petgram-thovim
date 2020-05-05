import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { Router } from "@reach/router";
import Context from "./Context";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/Navbar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";

// const UserLogged = ({children})=>{
//   return children({isAuth: false})
// }

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Logo />

      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path="/favs" />
              <NotRegisterUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>

      <NavBar />
    </Fragment>
  );
};
