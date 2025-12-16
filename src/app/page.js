import Image from "next/image";
import Navbar from "@/component/nav";
import Hero from "@/component/home/hero";
import Footer from "@/component/footer";
import Competition from "@/component/home/competition";
import Three from "@/component/home/three";
import ImpactSection from "@/component/home/impact";

export default function Home() {
  return (
    <div className="">

      <Navbar/>
      <Hero/>
      <Competition/>
      <Three/>
      <ImpactSection/>
      <Footer/>

    </div>
  );
}
