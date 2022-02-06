import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Confessions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      
      <main>
        <h1>
          Latest Confessions
        </h1>
        <div className="container">
          null
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
