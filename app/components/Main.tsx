"use client";

import { MainContainer } from "../mui-components/MainStyles";
import Sidebar from "./Sidebar";
import Chats from "./Chats";
import LastSection from "./LastSection";
import Hero from "./Hero";

const Main = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Chats />
      <Hero />
      <LastSection />
    </MainContainer>
  );
};

export default Main;
