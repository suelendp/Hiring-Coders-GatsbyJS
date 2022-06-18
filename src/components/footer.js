import React from "react";
import * as headerStyles from '../styles/header.module.scss';

const Footer = () =>{
    return(
        <footer>
            <p className={headerStyles.layoutFooter}>
                Site desenvolvido em GatsbyJS &copy; {new Date().getFullYear().toString()}{""}
            </p>
            </footer>

    )

}

export default Footer