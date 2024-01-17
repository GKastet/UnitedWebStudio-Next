import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";
import About from "../components/About/About.jsx";
//import Offer from "../components/Offer/Offer.jsx";
//import FAQ from "../components/FAQ/FAQ.jsx";
//import Feedback from "../components/Feedback/Feedback.jsx";
import Feedback from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Offer from "@/components/Offer/Offer";

export default function Home(prop:any) {
  console.log('prop: ', prop);
  const lang: string = "ua"
  
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <About />
      <Offer />
      <FAQ/>
      <Feedback/>
      <Footer lang={lang}/>
      <Link href="/projects">To ProjectsPage | </Link>
      <Link href="/contacts">To Contacts</Link>
    </main>
  );
}
