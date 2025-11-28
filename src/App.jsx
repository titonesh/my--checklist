
// import LoginPage from "./page/LoginPage.jsx";

// import "./App.css"

// function App() {
//   return(
//     <div className="flex">
//     <div className="mb-4">
//       <LoginPage/>
      
//     </div>
//     </div>
//   )
// }

// export default App;


// App.jsx

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./page/LoginPage";
// import RegisterPage from "./page/RegisterPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./page/LoginPage";
// import AdminPage from "./page/AdminPage.jsx";
// import RegisterPage from "./page/RegisterPage";
// import ResetPassword from "./page/ResetPassword";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//          <Route path="/admin" element={<AdminPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import AdminPage from "./page/AdminPage";
import RegisterPage from "./page/RegisterPage";
import ResetPassword from "./page/ResetPassword";
import UserDashboard from "./page/UserDashboard"; // optional normal user page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<UserDashboard />} /> {/* normal user page */}
      </Routes>
    </Router>
  );
}

export default App;
