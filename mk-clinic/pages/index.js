import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "../components/nav/Nav";
import About from "../components/about/About";
import Hero from "../components/herosection/Hero";
import Consulter from "../components/consult/Consulter";
import Visit from "../components/visit/Visit";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <main className="flex flex-col bg-[#F5F5F5]">
      
      <Hero></Hero>
      <About></About>
      <Consulter></Consulter>
      <Visit></Visit>
    </main>
    </>
  );
}
