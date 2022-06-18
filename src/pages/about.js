import React from "react";
import Layout from "../components/layout";
import * as headerStyles from '../styles/header.module.scss';

const About = () => {
    return(
        <Layout>
            <h1 className={headerStyles.layout}>Home Page</h1>
            <h2 className={headerStyles.layout}>Site em GatsbyJS</h2>
            <p className={headerStyles.layoutText}>A Home Page foi criada durante o programa Hiring Coders#3, aplicando os conhecimentos absorvidos durante a aula de Gatsby, com a professora Marianne Salomão.</p>
            <p className={headerStyles.layoutText}>O Hiring Coders é um programa de aceleração de carreiras da VTEX, realizado pela Gama Academy!</p> 
        </Layout>

    )

}

export default About