import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Kaisei_Decol, Inter } from "next/font/google";



const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
