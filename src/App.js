import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import SIgnUp from './Component/Login/SIgnUp';
import Navbar from './Component/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Component/LandingPage';
import CreateCandidate from './Component/CreateCandidate';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/landingPage' element={<LandingPage />}></Route>
        <Route path='/createCandidate' element={<CreateCandidate />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SIgnUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
// const { isLoading, error, data } = useQuery('repoData', () =>
// fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
//   res.json()
// )
// )