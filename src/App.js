import React, { Fragment } from "react";
import { Route } from "react-router";
import MainHeadr from "./Components/Users/MainHeader";
import AddUserPage from "./Pages/AddUserPage";
import LoginPage from "./Pages/LoginPage";
import UsersPage from "./Pages/UsersPage";

function App() {
  return (
    <Fragment>
      <MainHeadr />
      <Route path="/LoginPage">
        <LoginPage />
      </Route>
      <Route path="/AddUserPage">
        <AddUserPage />
      </Route>
      <Route path="/UsersPage">
        <UsersPage />
      </Route>
    </Fragment>
  );
}

export default App;
