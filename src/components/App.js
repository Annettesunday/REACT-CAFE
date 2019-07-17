import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MenuList from "./menus/MenuList";
import MenuDelete from "./menus/MenuDelete";
import MenuEdit from "./menus/MenuEdit";
import MenuShow from "./menus/MenuShow";
import MenuCreate from "./menus/MenuCreate";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route path="/" exact component={MenuList} />
        <Route path="/menus/new" component={MenuCreate} />
        <Route path="/menus/delete/:id/" component={MenuDelete} />
        <Route path="/menus/edit/:id" component={MenuEdit} />
        <Route path="/menus/:id" component={MenuShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
