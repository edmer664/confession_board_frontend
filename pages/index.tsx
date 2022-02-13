import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Script from "next/script";

const Landing: NextPage = () => {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>
      <Head>
        <title>Confession Board</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        id='gtag'
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMWNHB2NXY"
        ></Script>
        <Script id="gtag2">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZMWNHB2NXY');`}
        </Script>
      <div
        className=" text-dark"
        style={{
          // backgroundColor: "#f7b42c",

          // backgroundImage: `linear-gradient(95deg, #FC7619 0%, #B0581A 99%)`,
        }}
      >
        <div className="container-fluid p-lg-5 p-2 vh-100">
          <div className="row flex-lg-row-reverse row-cols-lg-2 row-cols-1 justify-content-center align-items-center">
            <div className="col pt-lg-0 pt-5">
              <Image
                src="/assets/hero.svg"
                alt="Confession Board"
                width={600}
                height={500}
                placeholder="empty"
              />
            </div>
            <div className="col pe-3">
              <h1 id="big-text" className="text-dark fw-bold text-center text-lg-start py-4">
                Confession Board
              </h1>
              
              <p className="text-center fs-4 text-lg-start">
                Confession Board is a platform for{" "}
                <span className=" fw-bold" style={{color:'#FCDB00'}}>sharing</span> your
                confessions
                <span className=" fw-bold" style={{color:'#FCDB00'}}> anonymously</span>. Share
                your deepest secrets anonymously and get anonymous feedback from
                other users. Clear your doubts and face the secrets of yourself.
              </p>
              
              <p className="fw-normal text-center text-lg-start">
                &ldquo;I am a person who is not afraid to speak my mind. I am a person
                who is not afraid to be myself.&rdquo; -{" "}
                <span className="fst-italic"> Anonymous </span>
              </p>
              <div className="d-flex flex-column flex-lg-row">
                <Link href="/create">
                  <a  className="btn btn-primary m-2 px-5 py-3">
                    {" "}
                    Create Confession{" "}
                  </a>
                </Link>
                <Link href="/home">
                  <a className="btn btn-outline-dark m-2 px-5 py-3">
                    {" "}
                    Read Confessions{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
