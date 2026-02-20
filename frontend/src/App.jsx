// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     
//     
//   )
// }

// export default App








import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FrontPage from './pages/FrontPage.jsx';
import LoginAsDonor from './pages/loginAsDonor.jsx';

import './App.css';

function App() {
  return (
    // <div className="App">
    //   <LoginAsDonor />
    // </div>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login-as-donor" element={<LoginAsDonor />} />
        </Routes>
      </div>
    </Router>
    
  );
}
//// <Route path="/" element={<FrontPage />} />
export default App;
