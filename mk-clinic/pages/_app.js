import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Check if the current page is an admin page
  const isAdminPage = router.pathname.startsWith('/Dashboard');

  return isAdminPage ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
