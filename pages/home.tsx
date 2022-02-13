import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import PostCard from "../components/PostCard";
import React, { useEffect } from "react";


const Home: NextPage = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch(`http://localhost:8000/api/get-posts/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      

      }
    }).then((res: { json: () => any; }) => res.json()).then((data: any) => setPosts(data)).catch((err: any) => setLoading(false)).finally(
      () => setLoading(false)
    );
  },[])


  return (
    <>
      <Head>
        <title>Confessions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />

      <main className="p-lg-5 p-1">
        <h1 className="px-4 px-lg-3">
          Latest Confessions
        </h1>
        <div className="d-flex flex-wrap align-items-center">
          {loading &&

            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>

          }

          {
            posts && posts.map(
              (post: any) => {
                return (
                  <div key={post.id} className="p-4">

                    <PostCard
                      id={post.id}
                      title={post.title}
                      content={post.body}
                      author={post.author}
                      date={post.pub_date}
                    />

                  </div>
                )
              }
            )
          }


        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
