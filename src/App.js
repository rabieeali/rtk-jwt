
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import PrivatePage from './pages/PrivatePage';
import Register from './pages/Register';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './pages/Unauthorized';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        {/* Public Routes */}

        <Route path='/' element={<Home />} />  {/* once again the path is "/" */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/unauthorized' element={<Unauthorized />} />

        {/* Private Routes */}

        <Route element={<RequireAuth allowedRoles={[2001]} />}>
          <Route path='/private-page' element={<PrivatePage />} />
        </Route>

        {/* Not Found */}

        <Route path='*' element={<Notfound />} />

      </Route>
    </Routes>
  );
}

export default App;
