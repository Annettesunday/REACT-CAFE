import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import MenuList from "./menus/MenuList";
import MenuDelete from "./menus/MenuDelete";
import MenuEdit from "./menus/MenuEdit";
import MenuShow from "./menus/MenuShow";
import MenuCreate from "./menus/MenuCreate";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import history from "../history";

const token = localStorage.jwtToken;
if (!!token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    console.log("I am logged out, and I need to log back in");
    window.location.href = "/login";
  } else {
    console.log("");
  }
}
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={MenuList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/menus/new" component={MenuCreate} />
          <Route path="/menus/delete/:id/" component={MenuDelete} />
          <Route path="/menus/edit/:id" component={MenuEdit} />
          <Route path="/menus/:id" component={MenuShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
