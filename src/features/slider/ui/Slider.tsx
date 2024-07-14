import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFileStore, VideoFile } from "@/shared/store/useFileStore";
import { Plus, X, Loader } from "lucide-react";
import styles from "./styles.module.scss";

const Slider: React.FC = () => {
   const files = useFileStore((state) => state.files);
   const addFile = useFileStore((state) => state.addFile);
   const removeFile = useFileStore((state) => state.removeFile);
   const setCurrentFile = useFileStore((state) => state.setCurrentFile);

   const [isLoading, setLoading] = useState(false);
   const navigate = useNavigate();

   const handleAddVideo = async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file && file.type.startsWith("video/")) {
         setLoading(true);
         const base64 = await toBase64(file);
         const videoURL = URL.createObjectURL(file);
         if (!files.some((video) => video.name === file.name)) {
            addFile({ url: videoURL, name: file.name, base64 });
         }
         setLoading(false);
      }
   };

   const handleRemoveVideo = (e: MouseEvent<HTMLButtonElement>, video: VideoFile) => {
      e.stopPropagation();
      removeFile(video);
   };

   const handleVideoClick = (video: VideoFile) => {
      setCurrentFile(video);

      navigate(`/editor`);
   };

   const toBase64 = (file: File): Promise<string> =>
      new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => resolve(reader.result as string);
         reader.onerror = (error) => reject(error);
      });

   return (
      <div className={styles.slider} id="video-list">
         <label className={styles.slider__addImage}>
            <input type="file" accept="video/*" onChange={handleAddVideo} disabled={isLoading} />
            {isLoading ? <Loader className={styles.loader} /> : <Plus />}
         </label>

         {files.map((video, idx) => (
            <div className={styles.slider__video} key={idx} onClick={() => handleVideoClick(video)}>
               <video src={video.url} controls />
               <button
                  className={styles.slider__removeButton}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => handleRemoveVideo(e, video)}
                  disabled={isLoading}>
                  {isLoading ? <Loader className={styles.loader} /> : <X />}
               </button>
               <button className={styles.slider__btn}>Click to Edit video</button>
            </div>
         ))}
      </div>
   );
};

export default Slider;
