
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import { AppRouter } from './Router/AppRouter.jsx'
function App() {

  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  )
}

export default App
