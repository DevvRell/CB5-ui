import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BusinessDirectory from './pages/BusinessDirectory'
import EventsPage from './pages/EventsPage'
import ComplaintsPage from './pages/ComplaintsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/businesses" element={<BusinessDirectory />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 