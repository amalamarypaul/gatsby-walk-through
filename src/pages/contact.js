import React from "react";
import { Link } from 'gatsby';

import Header from "../components/header";

export default (props)=>(<div>
<Link to="/">Home</Link>
<Header headerText="Contact"/>
<p>Send me an email!</p>
</div>
)
