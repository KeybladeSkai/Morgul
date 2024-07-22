import Header from "../../components/Header/Header" 
import HomeBody from "../../components/Home/HomeBody"
import Morgul from "../../components/Home/Artists/Morgul"
import Testimony from "../../components/Home/Testimony/Testimony"
import ShowGrid from "./ShowGrid"
import  MorgulInfo from "./MorgulInfo"
import Features from "./Features"
import SignUp from "../../Auth/SignUp"
import Footer from "./Footer"
const Home = () => {
  return (
    <div className="min-h-[100vh">
        <Header />
        <HomeBody/>
        <Morgul/>
        <Testimony/>
        <ShowGrid/>
        <MorgulInfo/>
        <Features/>
        <SignUp/>
        <Footer/>
    </div>
  )
}

export default Home