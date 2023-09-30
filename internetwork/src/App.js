// import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import Welcome from './pages/Welcome/Welcome';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="landing" element={<Welcome />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;