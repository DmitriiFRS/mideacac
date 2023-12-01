"use client";

import { useSelector } from "react-redux";
import styles from "../Magboost.module.scss";
import { RootState } from "@/app/Redux/store";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

function MagboostTitle() {
   const maxHeight = useMediaQuery("(max-height: 670px)");
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <div className={styles.titles__mainBody}>
         <div className={styles.titles__main}>
            <div className={styles.titles__elem}>
               Midea MagBoost - это прорыв в системах охлаждения,
               <div
                  className={`${styles.titles__elemFiller} ${
                     !maxHeight && scrollPosition > 19 ? styles.titles__elemFillerActive : ""
                  } ${maxHeight && scrollPosition > 18.5 ? styles.titles__elemFillerActiveMedia : ""}`}
               >
                  Midea MagBoost - это прорыв в системах охлаждения,
               </div>
            </div>
            <div className={styles.titles__elem}>
               который навсегда изменит ваши представления о
               <div
                  className={`${styles.titles__elemFiller} ${
                     !maxHeight && scrollPosition > 20 ? styles.titles__elemFillerActive : ""
                  } ${maxHeight && scrollPosition > 19 ? styles.titles__elemFillerActiveMedia : ""}`}
               >
                  который навсегда изменит ваши представления о
               </div>
            </div>
            <div className={styles.titles__elem}>
               надежности и эффективности
               <div
                  className={`${styles.titles__elemFiller} ${
                     !maxHeight && scrollPosition > 21 ? styles.titles__elemFillerActive : ""
                  } ${maxHeight && scrollPosition > 19.4 ? styles.titles__elemFillerActiveMedia : ""}`}
               >
                  надежности и эффективности
               </div>
            </div>
         </div>
      </div>
   );
}
export default MagboostTitle;
