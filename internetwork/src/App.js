// import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';
import FindWorkers from './pages/FindWorkers/FindWorkers';
import FindWorkersResults from './pages/FindWorkersResults/FindWorkersResults';
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './pages/EditProfile/EditProfile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />}/>
        <Route path="findworkers" element={<FindWorkers />}/>
        <Route path="findworkersresults" element={<FindWorkersResults />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="edit-profile" element={<EditProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;