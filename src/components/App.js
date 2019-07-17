import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuList from "./menus/MenuList";
import MenuDelete from "./menus/MenuDelete";
import MenuEdit from "./menus/MenuEdit";
import MenuShow from "./menus/MenuShow";
import MenuCreate from "./menus/MenuCreate";
import Header from "./Header";
import Auth from "./Auth";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={MenuList} />
          <Route path="/login" component={Auth} />
          <Route path="/menus/new" component={MenuCreate} />
          <Route path="/menus/delete/:id/" component={MenuDelete} />
          <Route path="/menus/edit/:id" component={MenuEdit} />
          <Route path="/menus/:id" component={MenuShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
