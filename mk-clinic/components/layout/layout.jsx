// components/Layout.js

import Head from 'next/head';
import Navbar from '../nav/Nav';
import Footer from '../footer/Fouter';

const Layout = ({ children }) => {
  return (
    <div >
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <Navbar></Navbar>

      <main >
        {children}
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
