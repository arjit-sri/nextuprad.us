import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header2 from "./Header2";

export function Layout({ children }) {
  const [routeName, setrouteName] = useState("");
  const router = useRouter();

  useEffect(() => {
    setrouteName();
  }, []);

  return (
    <>
      {router.asPath == "LandingPage" ? null : <Header />}

      <Head>
        <link rel="icon" href="/logo-2orange-1.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
      </Head>
      {children}

      {router.asPath == "LandingPage" ? null : <Footer />}
    </>
  );
}
