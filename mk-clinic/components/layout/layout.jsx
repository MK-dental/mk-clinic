// components/Layout.js

import Head from 'next/head';
import Navbar from '../nav/Nav';
import Footer from '../footer/Fouter';

const Layout = ({ children }) => {
  return (
    < >
      <Head>
        <title>MK Clinic</title>
        <meta name="description" content="it is a website for Malek kamel eddine dental clinic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
      <Navbar></Navbar>
      <main >
     <div className=' bg-white'></div>
        {children}
      
      </main>
      <Footer></Footer>
     
    </>
  );
};

export default Layout;
