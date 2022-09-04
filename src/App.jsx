import { useState, useEffect } from 'react'
import Header from './pages/Home/Main'
import Nav from './components/Nav/Nav'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'
import Loader from './components/Loader'

function App() {
 
  const [loading, setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  return (
    <div className="App">
      {
      loading ?
        <Loader loading={loading} />
      :
      <>
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </>
      }
    </div>
  )
}

export default App
