import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Header } from './Components/Header';
import { Hidingdiv } from './Components/Hidingdiv';
import { UserList } from './Components/UserList';
import { Login } from './Components/Login';
import  Signup  from './Components/SignUp';
import { RedirectIfLoggedIn } from './Components/RedirectifLoggedin';
import { PrivateRoute } from './Components/PrivateRoute';

function App() {


  return (

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}></Route>
        <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
        <Route path='/contact' element={<PrivateRoute><Contact/></PrivateRoute>}></Route>
        <Route path='/userlist' element={<PrivateRoute><UserList/></PrivateRoute>}></Route>
        <Route path='/signup' element={<PrivateRoute><Signup/></PrivateRoute>}></Route>
        <Route path='/about' element={<PrivateRoute><About/></PrivateRoute>}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
