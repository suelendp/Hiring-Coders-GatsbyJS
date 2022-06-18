import React from "react"
import Layout from "../components/layout"
import * as headerStyles from '../styles/header.module.scss';


const Index = () =>{
  return (
    <Layout>
      <h1 className={headerStyles.layout}>Suélen Dias Palhares</h1>
      <h2 className={headerStyles.layout}>Desenvolvedora Front-End</h2>
      <p className={headerStyles.layoutText}>Atuo na área de Tecnologia há 18 anos, onde acumulei experiências como: Analista de Sistemas, Analista de Negócios, Gerente de Projetos PMBOK por 6 anos, Scrum Master por 2 anos, e Tech Lead por 1 ano onde me apaixonei pela área de Desenvolvimento de Software e decidi me tornar uma Desenvolvedora Web, por isso estou em transição de carreira migrando da gestão para programação, estudando continuamente, para conquistar uma oportunidade de atuar como Desenvolvedora Front-end Júnior.</p>
      <p className={headerStyles.layoutText}>Estou em formação de Desenvolvimento Full Stack, realizado pela Gama Academy pelo programa Hiring Coders</p> 
    </Layout>
  ) 
}

export default Index
