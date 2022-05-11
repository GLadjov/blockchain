import { useState } from 'react';;
import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
    return(
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);
    return (
       <nav className="w-full flex md:justify-center justify-between items-center p-4"> 
       <div className='md:flex-[0-5] flex-initial justify-center items-center'>
           <img src={logo} alt="logo" className='w-60' />
       </div>
       </nav>
    );
}

export default Navbar;