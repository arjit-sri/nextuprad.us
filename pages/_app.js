import "../styles/globals.css";
// import "@/styles/globals.css";
import { Layout } from "../components/Layout";
// import { Layout } from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", duration: 1.2 }}
      >
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}
