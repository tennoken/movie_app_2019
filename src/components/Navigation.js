import React from "react";
import { Link } from "react-router-dom"; // Link는 페이지 새로고침 없이 
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;