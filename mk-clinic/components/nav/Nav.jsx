import { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav >
      <div className=" px-4 flex h-16 justify-between items-center  filter backdrop-blur-lg">
      
      <div className="justify-center content-center">
          <img src="/images/logo.png" alt="logo" height="100" width="100" />
        </div>
           <div>
           <ul className=" hidden  md:text-xs font-normal lg:text-base lg:font-semibold md:flex md:flex-row md:justify-between items-center md:gap-4 lg:gap-12">
            <li className="hover:text-blue-500"> <Link href="/">Accueil</Link></li>
            <li className="hover:text-blue-500"><Link href="/">Services</Link></li>
            <li className="hover:text-blue-500"><Link href="/">Galerie</Link></li>
            <li className=" hover:text-blue-500"><Link href="/">À propos</Link></li>
            <li className="p-2 hover:text-blue-500"><Link href="/">login</Link></li>
          </ul>
           </div>
         
          <div className=" text-xs sm:text-base flex flex-row justify-between items-center text-[#10217D] font-bold gap-2">
          <span>Appelez 0772 30 82 96</span>
          <span>ou</span>
          <button className="bg-[#10217D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Prenez un Rendez-vs
          </button>
       
          
        </div>
        <div className="z-60 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-900 font-bold focus:outline-none hover:border hover:border-blue-500 p-2 rounded-md "
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div
          className="fixed top-0 right-0 h-full bg-white w-64 z-50 overflow-y-auto"
          style={{ transform: `translateX(${isMenuOpen ? 0 : '100%'})` }}
        >
            <button
            onClick={toggleMenu}
            className=" text-base font-semibold tracking-tight  focus:outline-none hover:border hover:border-red-500 m-3  p-2 rounded-md "
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>
          <ul className="pt-8 flex flex-col justify-center ml-4 ">
          <li className="p-2 hover:text-blue-500"> <Link href="/">Accueil</Link></li>
            <li className=" p-2 hover:text-blue-500"><Link href="/">Services</Link></li>
            <li className="p-2 hover:text-blue-500"><Link href="/">Galerie</Link></li>
            <li className="p-2 hover:text-blue-500"><Link href="/">À propos</Link></li>
            <li className="p-2 hover:text-blue-500"><Link href="/">login</Link></li>
          </ul>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40`}
          onClick={toggleMenu}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
