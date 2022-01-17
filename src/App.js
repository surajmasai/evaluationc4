import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Admin } from './components/Admin';
import { Dashboard } from './components/Dashboard';
import { Registration } from './components/Registratin';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/admin' element={<Admin />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/registration' element={<Registration />}></Route>
    
    </Routes>


    </div>
  );
}

export default App;
