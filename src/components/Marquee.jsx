import { motion } from "framer-motion";
import { marquee } from "../data/cafe";

export default function Marquee() {
  // The list is written twice, so when it moves half its width it looks endless
  const words = [...marquee, ...marquee];

  return (
    <div className="bg-teal text-cream py-4 overflow-hidden" dir="ltr">
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {words.map((w, i) => (
          <span key={i} className="font-display text-2xl whitespace-nowrap flex items-center gap-10">
            {w} <span className="text-caramel">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
