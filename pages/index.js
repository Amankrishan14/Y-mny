import next from "next/image";
//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
//framer motion 
import{motion} from 'framer-motion'
//variants 
import {fadeIn} from '../variants'
const Home = () => {
  return <div className=" bg-primary/60 h-full">
    <div>
    <div className="text-center flex flex-col justify-center items-center xl:pt-40 xl:text-center h-full container mx-auto">
  <h1 className=" text-4xl xl:text-6xl font-bold leading-tight">
    Transforming Ideas<br />Into<span className="text-yellow-400">Digital Reality</span>
  </h1>
  <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
    Invest as you Shop, Invest when you Save. Grow your knowledge and more…
    Join the Y-mny Club. A New Shopping Experience.
  </p>
      </div>
    </div>
    <div>image</div>
  </div>;
};

export default Home;
