import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';
import Adminlayout from "../components/layout/adminlayout";
import { useState,useEffect } from 'react';
import { createClient } from '../utils/supabase/component';
export default function App({ Component, pageProps}) {
  const [user, setUser] = useState(null);
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = supabase.auth.getUser();
      setUser(currentUser);
    };

    fetchUser();
  }, []);
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
    <Adminlayout user={user}>
    <Component {...pageProps} />
    </Adminlayout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


