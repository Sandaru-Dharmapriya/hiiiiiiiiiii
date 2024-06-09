import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const textToType = `
      Hi there! I'm an avid tech enthusiast and aspiring full-stack developer.
      \n\n
      Passionate about crafting innovative solutions, I'm constantly exploring the dynamic realm of software engineering.
      \n\n
      Curious about my journey and projects? Let's connect!
    `;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <p>{text}</p>
      </div>
    </section>
  );
};
