import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <h1>Home Pagefrefer</h1>
      <Link to="/login">login</Link>
      <Link to="/home">about</Link>
      <Link to="/course">contact</Link>
      <Link to="/startcourse">products</Link>
      <Footer></Footer>
    </div>
  );
};

export default Home;
