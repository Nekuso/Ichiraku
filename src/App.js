import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
