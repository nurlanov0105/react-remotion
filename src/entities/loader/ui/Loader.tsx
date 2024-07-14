import { FC } from "react";
import styles from "./styles.module.scss";

interface IProps {
   width?: string;
}

const Loader: FC<IProps> = ({ width }) => {
   return (
      <div className={styles.box}>
         <div className={styles.loader} style={{ width }} />
      </div>
   );
};

export default Loader;
