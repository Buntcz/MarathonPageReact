import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar'

export default function App() {
   return (
    <div className='App'>
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' />
        <Route path='/join' />
        <Route path='/about' />
      </Routes>
    </Router>
    </div>
   )
}

