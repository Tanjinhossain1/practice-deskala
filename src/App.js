import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import SIgnUp from './Component/Login/SIgnUp';
import Navbar from './Component/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
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