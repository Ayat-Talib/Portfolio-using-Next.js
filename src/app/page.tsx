import React from 'react'
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";


const Home = () => {
  return (
   <Layout>
    <Hero />
    <About />
    <Project />
    <Contact />
  </Layout>
  )
}

export default Home
