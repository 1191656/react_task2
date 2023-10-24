import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <Products />
        <Footer />
      </div>
      
    </>
  )
}

export default App
