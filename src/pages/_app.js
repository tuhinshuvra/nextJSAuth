import '@/styles/globals.css'
import Navbar from "@/components/Layout/Navbar";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Navbar />
        <Toaster />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
