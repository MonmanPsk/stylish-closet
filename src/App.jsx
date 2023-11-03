import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Advertisement from './components/Advertisement.jsx'
import Category from './components/Category.jsx'

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Advertisement />
      <Category />
    </>
  )
}

export default App
