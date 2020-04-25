import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => (
    <div className="jumbotron">
        <h1>React Redux Plural</h1>
        <p>React and Redux application with responsiveness</p>
        <Link to="about" className="btn btn-primary btn-lg">
            About
        </Link>
    </div>
);

export default HomePage;