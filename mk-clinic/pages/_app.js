import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';
import Adminlayout from "../components/layout/adminlayout";

export default function App({ Component, pageProps}) {
 
  
 
  const router = useRouter();
  
  // Check if the current page is an admin page
  const isAdminPage = [
    "/archive",
    "/article",
    "/settings",
    "/reviews",
    "/today",
    "/history",
    "/Dashboard"
  ].some(path => router.pathname.startsWith(path));

  return isAdminPage ? (
    <Adminlayout >
    <Component {...pageProps} />
    </Adminlayout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


