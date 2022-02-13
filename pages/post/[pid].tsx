import { useEffect, useState } from "react"
import React from 'react'
import { useRouter } from "next/router"
import Head from "next/head"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'



export default function Posts() {
    const router = useRouter()
    const { pid } = router.query


  return (
    <>
        <Head>
            <title>Confession</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Navbar />

        <Footer />
    </>
  )
}
