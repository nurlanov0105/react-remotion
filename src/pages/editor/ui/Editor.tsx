import { Link } from "react-router-dom";
import VideoEditor from "@/features/videoComponent";
import bgImage from "@/shared/assets/imgs/bg/bg-editor.png";
import styles from "./styles.module.scss";

const Editor = () => {
   return (
      <section className="section" style={{ backgroundImage: `url(${bgImage})` }}>
         <div className="container">
            <Link to="/" className={styles.btn}>
               Go back
            </Link>
            <VideoEditor />
         </div>
      </section>
   );
};

export default Editor;
