import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/header.jsx'
import Nav from './components/nav.jsx'
import Home from './pages/home.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/footer.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import Dashboard from './pages/Aplication/Dashboard.jsx'
import Cursos from './pages/Aplication/Cursos.jsx'

function App() {
  const location = useLocation()
  const isLogin = location.pathname === '/login' || location.pathname === '/register' || location.pathname.startsWith('/dashboard')

  // Componente para proteger rutas (solo entra si hay token)
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" replace />;
  };

  return (
      <>
        {!isLogin && <Header />}
        {!isLogin && <Nav />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contact" element={<Contact />} />

          {/* Rutas privadas dentro del dashboard */}
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }
            
          >
            <Route index element={<Navigate to="cursos" replace />} />  
            <Route path="cursos" element={<Cursos />} />
            <Route path="curso/:id" element={<CourseDetail />} />
            {/* Otras rutas privadas pueden ir aquí */}
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>

        {!isLogin && <Footer />}
      </>
  )
}

export default App
