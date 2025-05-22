import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App;
