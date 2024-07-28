import Header from "../../components/Header/Header";
import "../../styles/Home/Home.css";
import HomeBody from "../../components/Home/HomeBody";
import Morgul from "../../components/Home/Artists/Morgul";
import Testimony from "../../components/Home/Testimony/Testimony";
import ShowGrid from "./ShowGrid";
import Features from "./Features";
import SignUp from "../../Auth/SignUp";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-[100vw] min-h-[100vh grid grid-cols-12 overflow-y-auto overflow-x-hidden">
      <Header />
      <HomeBody />
      <Morgul />
      <Testimony />
      <ShowGrid />
      <Features />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Home;
