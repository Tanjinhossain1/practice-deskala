import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import SIgnUp from './Component/Login/SIgnUp';
import Navbar from './Component/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Component/LandingPage';
import CreateCandidate from './Component/CreateCandidate';
import UpdateCandidate from './Component/UpdateCandidate';
import Home from './Component/Home';
import RequireAuth from './Component/Login/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/landingPage' element={<RequireAuth><LandingPage /></RequireAuth>}></Route>
        <Route path='/createCandidate' element={<RequireAuth><CreateCandidate /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SIgnUp />}></Route>
        <Route path='/landingPage/updateCandidate/:id' element={<UpdateCandidate />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;