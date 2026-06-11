import React from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Profile } from "./components/profile/Profile";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Profile
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          name="Anna Caroline Dias"
          bio="Desenvolvedora FullStack"
          phone="+5511987654321"
          email="ana.carol.dias@email.com"
          githubUrl="https://github.com/"
          linkendinUrl="https://www.linkedin.com/login/pt"
          instagramUrl="https://www.instagram.com/"
        />
      </div>
      <Footer />
    </>
  );
}


