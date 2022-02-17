import React from "react";
import { AddNav } from './components/add-nav/AddNav';
// import { DatePicker } from './components/date-picker/DatePicker';

function App() {
  return (
    <div className="App">
      <AddNav />
      <div>
        <p className="userName">Босак Юлия Вячеславовна</p>
      </div>
      {/* <DatePicker/> */}
    </div>
  );
}

export default App;
