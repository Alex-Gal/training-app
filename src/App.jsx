import React from "react";
import { AddNav } from './components/add-nav/AddNav';
import { ListItem } from './components/list-item/ListItem';

export const App = () => {
  return (
    <div className="App">
      <header>
        <AddNav />
        <p className="userName">Босак Юлия Вячеславовна</p>
      </header>
      <div>
        <ListItem/>
      </div>
    </div>
  );
}
