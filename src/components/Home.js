// @ts-nocheck
import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <button onClick={() => navigate("/menu")}>SİPARİŞ VER</button>
      </div>
    </div>
  );
};
