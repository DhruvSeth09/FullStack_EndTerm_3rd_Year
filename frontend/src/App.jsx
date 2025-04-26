import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/auth/Login';
import Signup from './Components/auth/Signup';
import Body from './Components/Homepage/Body';
import DashBoard from './Components/dashboard/DashBoard';
import VideoPage from './Components/Homepage/VideoPage';

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path='/' element={<Body />}></Route>
          <Route path="/video/:videoId" element={<VideoPage />}></Route>
          <Route path="/dashboard/:videoId" element={<DashBoard />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
