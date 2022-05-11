import logo from '../../images/logo.png';

const Navbar = () => {
    return (
       <nav className="w-full flex md:justify-center justify-between items-center p-2"> 
       <div className='md:flex-[0-5] flex-initial justify-center items-center'>
           <img src={logo} alt="logo" className='border-2 rounded-xl bg-[#070707b7] w-60' />
       </div>
       </nav>
    );
}

export default Navbar;