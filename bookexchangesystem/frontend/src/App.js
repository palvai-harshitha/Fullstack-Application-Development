import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Welcome from './pages/MainPage';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import Viewbooks from'./components/books/viewbooks';
import Addbooks from'./components/books/Addbooks';
import Deatils from'./components/books/Deatils';
import History from './components/books/Bookhistory';
import './components/books/ViewBooks.css';
// index.js or App.js



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/home" />
  }

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/welcome' element={<PrivateRoute element={<Welcome/>} />} />
        <Route path='/viewbooks' element={<Viewbooks/>} />
        <Route path='/addbooks' element={<Addbooks/>} />
        <Route path='/viewbooks/:id' element={<Deatils/>} />
        <Route path='/history/:id' element={<History/>} />

      </Routes>
    </div>
  );
}

export default App;