
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Update from './pages/Update'
import Navbar from './components/Navbar'
import Add from './pages/Add'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/books" element={<Books/>}/>
          <Route exact path='/add' element={<Add/>}/>
          <Route exact path='/update/:id' element={<Update/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
