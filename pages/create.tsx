import React from 'react';
import Head from "next/head";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

export default function create() {

    

  return (
      <>
      <Head>
        <title>Make Confessions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    
        <div>
            <Navbar />
                <main className='p-5 vh-100 container justify-content-center'>
                    <h1 className="py-4 px-3 fs-1 ">
                        Add new post
                    </h1>

                    <div className="container">
                        <form action='https://confession-board.herokuapp.com/api/make-post/' method='POST'>
                            <div className="form-group">
                                <label htmlFor="title">Dedicated To</label>
                                <input type="text" className="form-control" id="title" name='title' placeholder="Juan Dela Cruz" />
                                <label htmlFor="content">Content</label>
                                <textarea className="form-control" id="content" name="body" placeholder="Type your confessions here..." rows={3} ></textarea>
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
