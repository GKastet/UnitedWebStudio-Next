import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";
import About from "../components/About/About.jsx";
import Offer from "../components/Offer/Offer.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import Feedback from "../components/Feedback/Feedback.jsx";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <About />
      <Offer />
      <FAQ/>
      <Feedback/>
      <Footer/>
      <Link href="/projects">To ProjectsPage | </Link>
      <Link href="/contacts">To Contacts</Link>
    </main>
  );
}
