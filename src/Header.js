import './header.css' 
import imagelogo from './assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Outlet,Link } from 'react-router-dom';
const Header =()=>{
return(
    
<div>
<div className='main_'>
        <div className='header-logo'>
            <img src={imagelogo}/>
        </div>
        <label className='label_'>Search Box</label>
       
        <input className='inputheader-' placeholder='Search Here'/>
        <CiSearch className='icon-'/>
        <CiShoppingCart className='cart-' />
        <div className='pages-'>
            <Link className='header_' to='/'>home</Link>
            <Link className='header_' to='login'>Login</Link>
            <Link className='header_' to='contect'>contect</Link>
            <Link className='header_' to='ProductList'>Admin Panel</Link>
        </div>

</div>

<Outlet/>

</div>





);

};
export default Header