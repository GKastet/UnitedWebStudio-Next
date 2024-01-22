"use client"
import styles from "./hero.module.css";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Spline from "@splinetool/react-spline";
import Description from "../shared/Description";

function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <div>
          <h1 className={styles.hero}>
            Best
            <span className={styles.hero}></span>
            <span className={styles.hero}></span>
            digital results
          </h1>
          <button className={styles.hero}>
          let’s talk
            <span>
              <HiOutlineArrowUpRight size="24" />
            </span>
          </button>
          <Description>
          We specialize in bespoke web design and innovative development, <span>bringing your brand to life</span> with visually stunning interfaces and seamless features. <span>Collaborate with us now </span> for an exceptional, immersive digital experience.
          </Description>
        </div>
        <div className={styles.hero}>
        <Spline scene="https://prod.spline.design/RYWKcIOkNx-li9UP/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
