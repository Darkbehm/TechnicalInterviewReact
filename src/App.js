import "./App.css";
import { Routes, Route } from "react-router-dom";

import Reports from "./Components/Reports";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reports/" element={<Reports/>}/> 

        </Routes>
    </div>
  );
}

export default App;