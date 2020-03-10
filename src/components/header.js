import React from 'react';
import Styles from "./header.module.css"

console.log(Styles);

export default (props)=>(
  <div className={Styles.container}>
    <h1>{props.headerText}</h1>
  </div>
)
