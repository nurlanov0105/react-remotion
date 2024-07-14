import { useEffect, useState, useRef } from "react";
import { Player, PlayerRef } from "@remotion/player";
import { useFileStore } from "@/shared/store/useFileStore";
import { MyComposition } from "@/remotion/Composition";
import styles from "./styles.module.scss";

const VideoEditor = () => {
   const currentFile = useFileStore((state) => state.currentFile);
   const [videoBase64, setVideoBase64] = useState<string>("");
   const [currentFrame, setCurrentFrame] = useState(0);
   const playerRef = useRef<PlayerRef>(null);

   useEffect(() => {
      if (currentFile) {
         setVideoBase64(currentFile.base64);
      }
   }, [currentFile]);

   const handleCurrentFrameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const frame = Number(event.target.value);
      setCurrentFrame(frame);
      playerRef.current?.seekTo(frame);
   };

   const handleDownloadVideo = () => {
      const a = document.createElement("a");
      a.href = videoBase64;
      a.download = "video.mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
   };

   return (
      <div className={styles.container}>
         <Player
            ref={playerRef}
            component={MyComposition}
            inputProps={{ videoBase64 }}
            durationInFrames={120}
            fps={30}
            compositionWidth={700}
            compositionHeight={600}
            controls
         />
         <div className={styles.container__box}>
            <input
               type="range"
               min="0"
               max="119"
               value={currentFrame}
               onChange={handleCurrentFrameChange}
            />
            <button
               className={styles.container__btn}
               style={{ marginTop: "10px" }}
               onClick={handleDownloadVideo}>
               Download Video
            </button>
         </div>
      </div>
   );
};

export default VideoEditor;
