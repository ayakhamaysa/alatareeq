import { motion } from "framer-motion";
import { cafe } from "../data/cafe";

export default function Navbar() {
  return (
    // Slides down from above when the page opens
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 inset-x-0 z-20"
    >
      <nav className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between text-ink">
        <a href="#" className="font-display text-3xl text-teal">{cafe.name}</a>
        <div className="flex gap-6 text-sm">
          <a href="#menu" className="hover:text-teal">المنيو</a>
          <a href="#story" className="hover:text-teal">قصتنا</a>
          <a href="#visit" className="hover:text-teal">زورونا</a>
        </div>
      </nav>
    </motion.header>
  );
}
