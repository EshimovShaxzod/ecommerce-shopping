import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import { Home, Login, NotFound, Product, Products, SignUp } from './pages'

const App = () => {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
   </>
  )
}

export default App