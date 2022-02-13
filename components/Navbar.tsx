import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";


export default function Navbar(props:any) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href='/'>
          <a className="navbar-brand" >
            Confession Board
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/home">
                <a className="nav-link" aria-current="page" >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="create">
                <a className="nav-link" >
                  Make Post
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
