import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Home = () => {
    const [formToDisplay, setFormToDisplay] = useState("login");
    return <div>{formToDisplay === "login" ? <Login /> : <Register />}</div>;
};

export default Home;
