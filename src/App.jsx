import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { MainPage } from './pages/MainPage'

export default function App() {
   return (
    <div className='App'>
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/join' />
        <Route path='/about' />
      </Routes>
    </Router>
    </div>
   )
}

