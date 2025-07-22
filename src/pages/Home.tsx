import Carousel from "../components/Carousel";
import MissionVision from "../components/MissionVision";
import PastorsMessage from "../components/PastorsMessage";
import UpcomingServices from "../components/UpcomingServices";
import Welcome from "../components/Welcome";
import Contact from "./Contact";

const Home = () => {
  return (
    <div >
      <Carousel />
      <Welcome />
      <MissionVision/>
      <UpcomingServices/>
      <PastorsMessage/>
      <Contact/>
    </div>
  )
};

export default Home;
