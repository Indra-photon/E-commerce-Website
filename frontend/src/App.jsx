import Navbar from './components/navbar/Navbar';
import BodyHomepage from './components/home/BodyHomepage';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import CreateProduct from './components/createproduct/CreateProduct';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/login/Signup';



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
          <Route path='/login' element = {<Login />}/>
          <Route path='/signup' element = {<Signup />}/>

        </Routes>
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App
