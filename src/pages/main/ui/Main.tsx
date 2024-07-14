import IntroAI from "@/widgets/introAI";
import Slider from "@/features/slider";
import bgImage from "@/shared/assets/imgs/bg/bg.png";

const Main = () => {
   return (
      <section className={"section"} style={{ backgroundImage: `url(${bgImage})` }}>
         <div className="container">
            <IntroAI />
            <div className="mt-6 mb-10">
               <Slider />
            </div>
         </div>
      </section>
   );
};

export default Main;
