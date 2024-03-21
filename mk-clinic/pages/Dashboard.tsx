import type { User } from '@supabase/supabase-js'
import type { GetServerSidePropsContext } from 'next'
import React, { useEffect } from 'react';
import Link from 'next/link';

import {createClient} from '../utils/supabase/server-props'

export default function Dashboard({ user }: { user: User  }) {
  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/auth/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Redirect or perform any other action after successful sign-out
        window.location.href = '/'; // Redirect to home page for example
      } else {
        console.error('Failed to sign out:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

    useEffect(() => {
        const menuButton = document.getElementById('menu-button');
        const sidebar = document.getElementById('sidebar');
    
        const toggleSidebar = () => {
          sidebar.classList.toggle('hidden');
          sidebar.classList.toggle('lg:block');
        };
    
        menuButton.addEventListener('click', toggleSidebar);
    
        return () => {
          menuButton.removeEventListener('click', toggleSidebar);
        };
      }, []);
  return(
  <main className="bg-gray-200 lg:flex">
   
  <nav className="bg-white border-b border-gray-300">
    <div className="flex justify-between items-center px-9">
    
      <button id="menu-button" className="lg:hidden">
        <i className="fas fa-bars text-cyan-500 text-lg"></i>
      </button>
      <div className="ml-1">
        <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="logo" className="h-20 w-28" />
      </div>
      <div className="space-x-4">
        <button>
          <i className="fas fa-bell text-cyan-500 text-lg"></i>
        </button>
        <button>
          <i className="fas fa-user text-cyan-500 text-lg"></i>
        </button>
      </div>
    </div>
  </nav>
  <div id="sidebar" className="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none">
    <div className="p-4 space-y-4">
      
        <Link href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
          <i className="fas fa-home text-white"></i>
          <span className="-mr-1 font-medium">Inicio</span>
        </Link>
      
    
        <Link href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
          <i className="fas fa-gift"></i>
          <span>Recompensas</span>
        </Link>
     
      
        <Link href="#"className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
          <i className="fas fa-store"></i>
          <span>Sucursalses</span>
        </Link>
     
     
        <Link href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
          <i className="fas fa-wallet"></i>
          <span>Billetera</span>
        </Link>
      
    
        <Link href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
          <i className="fas fa-exchange-alt"></i>
          <span>Transacciones</span>
        
      </Link>
     
        <Link href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
          <i className="fas fa-user"></i>
          <span>Mi cuenta</span>
        </Link>
     
     
        <div onClick={handleSignOut} className="cursor-pointer px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
          <i className="fas fa-sign-out-alt"></i>
          <span>logout</span>
        </div>
     
    </div>
  </div>
  <div className="lg:w-full lg:ml-64 px-6 py-8">
  <h1>Hello, {user.email || 'user'}!</h1 >
    <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
  
      <div className="flex items-center">
      
        <i className="px-3 fas fa-search ml-1"></i>
        <input type="text" placeholder="Buscar..." className="ml-3 focus:outline-none w-full" />
      </div>
    </div>
    <div className="lg:flex gap-4 items-stretch">
      <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
        <div className="flex justify-center items-center space-x-5 h-full">
          <div>
            <p>Saldo actual</p>
            <h2 className="text-4xl font-bold text-gray-600">50.365</h2>
            <p>25.365 $</p>
          </div>
          <img src="https://www.emprenderconactitud.com/img/Wallet.png" alt="wallet" className="h-24 md:h-20 w-38" />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
        <div className="flex flex-wrap justify-between h-full">
          <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
            <i className="fas fa-hand-holding-usd text-white text-4xl"></i>
            <p className="text-white">Depositar</p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
            <i className="fas fa-exchange-alt text-white text-4xl"></i>
            <p className="text-white">Transferir</p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
            <i className="fas fa-qrcode text-white text-4xl"></i>
            <p className="text-white">Canjear</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>) 
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabase = createClient(context)

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: data.user,
      
    },
    
  }
}


