import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from "./utils/Auth";

import "devextreme/dist/css/dx.material.blue.dark.css";
// import "devextreme/dist/css/dx.material.teal.dark.css";
// import "devextreme/dist/css/dx.material.lime.light.compact.css";
// import "devextreme/dist/css/dx.softblue.css";
// import "devextreme/dist/css/dx.darkviolet.css";
// import "devextreme/dist/css/dx.darkmoon.compact.css";

import "./App.css";

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth Component={Home} />} />
        <Route path="/profile" element={<Auth Component={Profile} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
