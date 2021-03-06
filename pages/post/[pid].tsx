import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Script from "next/script";

export default function Posts() {
  const router = useRouter();
  const { pid } = router.query;

  interface Post {
    id: number;
    title: string;
    body: string;
    author: string;
    date: string;
  }

  console.log(pid);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({} as Post);
  console.log(`https://confession-board.herokuapp.com/api/get-post/${pid}/`);

  useEffect(() => {
    if (!router.isReady) return;
    fetch(`https://confession-board.herokuapp.com/api/get-post/${pid}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res: { json: () => any }) => res.json())
      .then((data: any) => {
        console.log(data);
        setPost(data);
      })
      .catch((err: any) => setLoading(false))
      .finally(() => setLoading(false));
    console.log(post);
  }, [router.isReady]);
  return (
    <>
      <Head>
        <title>Confession</title>
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
      <Navbar />

      <main>
        <h1 className="text-center py-5">Confession</h1>
        {loading && (
          <div className="d-flex justify-content-center vh-100">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        {post && (
          <div className="container w-75 vh-100">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">{post.title}</h3>
                  </div>
                  <div className="card-body">
                    <p className="card-text ">{post.body}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Posted by{" "}
                      <span className="fw-bold">
                        {post.author ? post.author : "Anonymous"}
                      </span>{" "}
                      on {new Date(post.date).toDateString()}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
