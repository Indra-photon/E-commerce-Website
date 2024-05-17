import './navbar.css';
import {Link, useLocation} from "react-router-dom";




function Navbar (){
  

  const location = useLocation().state;
  const email = location?.id;
  const emailLength = email ? email.length : 0;
  var isLoggedin = false ;
  if (emailLength > 0){
    var isLoggedin = true
  }
  
  
  
  
  
    
    return (
    <div className='flex justify-between bg-sky-950 text-white text-2xl'>
        <p className='pt-10 pl-10'> <Link to = "/">Shopping site</Link></p>
        <nav>
          <ul className='flex gap-10 cursor-pointer pl-20 pr-10 py-10'>
            <li className='font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to = "/home">Home</Link></li>
            <li className='font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to = "/shop">Shop</Link></li>
            <li className='font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to = "/cart">Cart</Link></li>
            <li className='font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to = "/create_products">Add product</Link></li>
            <li className='font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to = "/login">{isLoggedin ? email : "Profile"}</Link></li>
          </ul>
        </nav>
      </div>
    )
}

export default Navbar;