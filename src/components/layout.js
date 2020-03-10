import React from "react";
import { Link } from "gatsby";
import Styles from "./layout.module.css";


const ListLink = props =>(
  <li className={Styles.listLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({children})=>(
  <div className={Styles.container}>
    <header>
      <Link to="/" className={Styles.title}>
        <h3>My First Gatsby Site</h3>
      </Link>
      <ul className={Styles.listContainer}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <div className={Styles.body}>
      {children}
    </div>

  </div>
)
