import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';
import Adminlayout from "../components/layout/adminlayout"
import createClient from '../utils/supabase/server-props';
export default function App({ Component, pageProps,user }) {
  const router = useRouter();
  console.log('User:', user);
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
export async function getServerSideProps(context) {
  const supabase = createClient(context);

  const { user, error } = await supabase.auth.api.getUserByCookie(
    context.req
  );

  if (error || !user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: user,
    },
  };
}
