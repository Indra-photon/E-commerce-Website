import Navbar from './components/navbar/Navbar';
import BodyHomepage from './components/home/BodyHomepage';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import CreateProduct from './components/createproduct/CreateProduct';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div className='box-border w-full'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element = {<BodyHomepage />}/>
          <Route path='/home' element = {<BodyHomepage />}/>
          <Route path='/shop' element = {<Shop />}/>
          <Route path='/cart' element = {<Cart />}/>
          <Route path='/create_products' element = {<CreateProduct />}/>
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App
