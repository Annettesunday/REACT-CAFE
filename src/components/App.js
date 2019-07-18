import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import MenuList from "./menus/MenuList";
import MenuDelete from "./menus/MenuDelete";
import MenuEdit from "./menus/MenuEdit";
import MenuShow from "./menus/MenuShow";
import MenuCreate from "./menus/MenuCreate";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import history from "../history"
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
