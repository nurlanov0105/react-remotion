import { Composition } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
   return (
      <>
         <Composition
            id="MyComposition"
            component={MyComposition}
            durationInFrames={120}
            fps={30}
            width={700}
            height={600}
            defaultProps={{ videoBase64: "" }}
         />
      </>
   );
};
