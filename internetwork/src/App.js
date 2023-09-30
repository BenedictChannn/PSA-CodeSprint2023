import logo from './logo.svg';
import Landing from './pages/Landing/Landing';
import Welcome from './pages/Welcome/Welcome';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;