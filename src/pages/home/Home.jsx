import Header from "../../components/Header/Header" 
import HomeBody from "../../components/Home/HomeBody"
import Morgul from "../../components/Home/Artists/Morgul"
import Testimony from "../../components/Home/Testimony/Testimony"
const Home = () => {
  return (
    <div className="min-h-[100vh">
        <Header />
        <HomeBody/>
        <Morgul/>
        <Testimony/>
    </div>
  )
}

export default Home