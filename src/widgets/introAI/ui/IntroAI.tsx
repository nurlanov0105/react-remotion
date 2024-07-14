import robotImg from "@/shared/assets/imgs/avatars/robot-2.png";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const IntroAI = () => {
   const listRef = useRef<HTMLUListElement>(null);

   useEffect(() => {
      if (listRef.current) {
         const items = listRef.current.children;
         Array.from(items).forEach((item, index) => {
            if (index !== 0 && item instanceof HTMLElement) {
               item.style.animationDelay = `${(index + 1) * 1}s`;
            }
         });
      }
   }, []);

   return (
      <div className={styles.intro}>
         <div className={styles.intro__box}>
            <img src={robotImg} alt="ai human" className={styles.intro__img} />

            <div className={styles.intro__right}>
               <ul ref={listRef} className={styles.intro__list}>
                  <li>
                     <code>Приветствую, я Al. Добро пожаловать в наше </code>
                  </li>
                  <li>
                     <code>космическое измерение! В этом мире технологии и</code>
                  </li>
                  <li>
                     <code>звезд, тебе предстоит выполнить важную задачу.</code>
                  </li>
                  <li>
                     <code>Пожалуйста, загрузите ваше видео, чтобы</code>
                  </li>
                  <li>
                     <code> продолжить наше путешествие 🚀🛰️</code>
                  </li>
               </ul>

               <a href="#video-list" className={styles.intro__btn}>
                  Okay!
               </a>
            </div>
         </div>
      </div>
   );
};

export default IntroAI;
