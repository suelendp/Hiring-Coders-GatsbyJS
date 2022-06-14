import React from "react"
import Layout from "../components/layout"
import * as headerStyles from '../styles/header.module.scss';




const Index = () =>{
  return (
    <Layout>
      <container  className={headerStyles.body}>
      <h1>Home Page</h1>
      <h2>Aula GatsbyJS</h2>
      </container>
    </Layout>


  ) 
}

export default Index
