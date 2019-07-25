import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Menu from "../apis/Menu";
import MenuList from "./menus/MenuList";
import MenuDelete from "./menus/MenuDelete";
import MenuEdit from "./menus/MenuEdit";
import MenuShow from "./menus/MenuShow";
import MenuCreate from "./menus/MenuCreate";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import history from "../history";
import store from "../store";
import { getUser } from "../actions";

const token = localStorage.jwtToken;
if (!!token) {
  console.log(!!token, "dsfcesr");
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    console.log("I am logged out, and I need to log back in");
    window.location.href = "/login";
  } else {
    console.log("I am being called");
    // store.dispatch(getUser());
    Menu.defaults.headers.common["Authorization"] = token;
    console.log("The store object is >>>>>>>>>>>>>>>>>>>>", store);
    store.dispatch(getUser());
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
