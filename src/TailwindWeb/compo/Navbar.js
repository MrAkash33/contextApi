import React, { useState } from "react";
import  {GiHamburgerMenu,AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () =>{
    const [nav,setNav] = useState(true);
    const handleNav = () =>{
        setNav(!nav)
    }
    return(
        <div className="flex text-white justify-between items-center max-w-[1240px] mx-auto">
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React.</h1>
                <ul className="hidden md:flex">
                    <li className="p-4">Home</li>
                    <li className="p-4">Company</li>
                    <li className="p-4">Resources</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">{
                        !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> 
                    }
                </div>
               {!nav ?  <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-gray-600 bg-[#000300]' :'hidden'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React.</h1>
                    <ul className="p-4 uppercase">
                        <li className="p-4 border-grey-900 border-b">Home</li>
                        <li className="p-4 border-grey-900 border-b">Company</li>
                        <li className="p-4 border-grey-900 border-b">Resources</li>
                        <li className="p-4 border-grey-900 border-b">About</li>
                        <li className="p-4 border-grey-900 border-b">Contact</li>
                    </ul>
                </div> :''}
        </div>
    )
}

export default Navbar