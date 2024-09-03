import Nav from '../app/Components/Nav'
import Footer from "../app/Components/Footer"
import Hero from "./Components/Homepage/Hero"
import Heart from "./Components/Homepage/Heart"
import Package from "./Components/Homepage/Package"
import People from "./Components/Homepage/People"
import Meet from "./Components/Homepage/Meet"
import Carosell from "./Components/Homepage/carosell"

export default function Home() {
  return (
     <div>
      <Nav/>
      <Hero/>
      <Heart/>
      <Package/>
      <People/>
      <Meet/>
      <Carosell/>
      <Footer/>
     </div>
  );
}
