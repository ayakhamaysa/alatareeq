import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Visit from "./components/Visit";

export default function App() {
  return (
    // reducedMotion="user": if the visitor turned off animations on the phone, we respect that
    <MotionConfig reducedMotion="user">
      <Navbar />
      <Hero />
      <Marquee />
      <Menu />
      <Story />
      <Visit />
    </MotionConfig>
  );
}
