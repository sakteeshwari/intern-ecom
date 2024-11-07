import React from 'react'
import imglogo from "../assets/imglogo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header class="sticky bg-white top-0 shadow-xl z-50">
    <nav class="flex items-center justify-between ml-5 p-4 mr-10 relative cursor-pointer">
        <img src={imglogo} className=' h-12 w-28' alt="" />
        <Link to={"/"}><p className=' text-xl pt-2 text-gray-600 hover:text-gray-950 hover:underline'>Product page</p></Link>
         <Link to={"/cart"}> <p className=' text-xl pt-2 text-gray-600 hover:text-gray-950 hover:underline'>Cart page</p></Link>   
           
        
        <i class="fa-solid fa-bars text-xl lg:hidden side-menubar " id="click-sidemenu"></i>
    </nav>
</header>
    </div>
  )
}

export default Navbar
