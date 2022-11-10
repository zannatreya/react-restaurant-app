import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
