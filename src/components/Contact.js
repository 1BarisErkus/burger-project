import React from "react";
import "../styles/Contact.css";
import BannerImage from "../assets/banner.png";

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label>Ad Soyad</label>
          <textarea
            // @ts-ignore
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz..."
          />
        </form>
      </div>
    </div>
  );
};
