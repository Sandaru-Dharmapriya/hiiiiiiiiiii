import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const textToType = "Hi, I'm Sandaru Dharmapriya";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{text}</h1>
        <a href="mailto:sandarudharmapriya@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
