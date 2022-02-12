import React from 'react';
import Head from "next/head";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

export default function create() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/make-post'
        ,{
            
        });
      }

  return (
      <>
      <Head>
        <title>Make Confessions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    
        <div>
            <Navbar />
                <main className='p-3'>
                    <h1>
                        Add new post
                    </h1>

                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" name='title' placeholder="Title" />
                                <label htmlFor="content">Content</label>
                                <textarea className="form-control" id="content" name="body" rows={3} ></textarea>
                                <label htmlFor="author" >Author (optional)</label>
                                <input type="text" name="author"  className="form-control" id="author" placeholder="Author" />
                                <button type="submit" className="btn btn-primary my-3">Submit</button>

                            </div>
                        </form>
                    </div>
                </main>
            <Footer />
        </div>
      
      </>
  );
}