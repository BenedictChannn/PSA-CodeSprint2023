import logo from './logo.svg';
// import Welcome from './pages/Welcome/Welcome';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          {/* <Route path="welcome" element={<Welcome />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;