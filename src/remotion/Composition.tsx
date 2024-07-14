import { AbsoluteFill, Video } from "remotion";

export const MyComposition: React.FC<{ videoBase64: string }> = ({ videoBase64 }) => {
   return (
      <AbsoluteFill>
         <Video src={videoBase64} />
      </AbsoluteFill>
   );
};
