import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/header.jsx'
import Nav from './components/nav.jsx'
import Home from './pages/home.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/footer.jsx'

function App() {

  return (
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer />
      </>
  )
}

export default App
