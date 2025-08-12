import aos from "aos"
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './Router/AppRouter.jsx'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    aos.init({
      duration: 1000,
      // disable:"mobile"
    })
  }, [])
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  )
}

export default App
