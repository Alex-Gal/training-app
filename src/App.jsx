import React from "react";
import { AddNav } from './components/add-nav/AddNav';
import { Calendar } from './components/calendar/Calendar';

function App() {
  return (
    <div className="App">
      <header>
      <AddNav />
      <p className="userName">Босак Юлия Вячеславовна</p>
      </header>
      
      <div>
        
      </div>
      <Calendar/>
    </div>
  );
}

export default App;
