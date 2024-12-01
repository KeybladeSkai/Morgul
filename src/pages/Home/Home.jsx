import "../../styles/Home/Home.css";
import HomeBody from "../../components/Home/HomeBody";
import Morgul from "../../components/Home/Artists/Morgul";
import Testimony from "../../components/Home/Testimony/Testimony";
import ShowGrid from "./ShowGrid";
import Features from "./Features";
import SignUp from "../../Auth/SignUp";

const Home = () => {
  return (
    <div className="relative w-[100vw] min-h-[100vh] grid grid-cols-12 overflow-y-auto overflow-x-hidden">
      <HomeBody />
      <Morgul />
      <Testimony />
      <ShowGrid />
      <Features />
      <SignUp />
    </div>
  );
};

export default Home;
