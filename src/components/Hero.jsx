import { motion } from "framer-motion";
import { cafe } from "../data/cafe";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const word = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="bg-cream pt-28 md:pt-24 pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-latin italic text-caramel text-xl text-right"
            dir="ltr"
          >
            {cafe.nameEn}
          </motion.p>

          <h1 className="font-display text-teal text-7xl md:text-8xl mt-2">{cafe.name}</h1>

          {/* Each word of the slogan appears on its own */}
          <motion.p
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display text-4xl md:text-5xl mt-3"
          >
            {cafe.tagline.split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block ml-3">
                {w}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg text-ink/70 mt-6 max-w-md leading-relaxed"
          >
            {cafe.intro}
          </motion.p>

          <motion.a
            href="#menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 bg-teal text-cream font-medium px-8 py-3 rounded-full"
          >
            شوف المنيو
          </motion.a>
        </div>

        {/* The cup character comes in, then keeps walking (bobbing and swaying) */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.3 }}
          className="flex justify-center"
        >
          <motion.img
            src={cafe.heroImage}
            alt={cafe.name}
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 md:w-96"
            // Soft edges so the road fades into the background
            style={{
              maskImage: "linear-gradient(to right, black 55%, transparent 97%), linear-gradient(to bottom, black 70%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskImage: "linear-gradient(to right, black 55%, transparent 97%), linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskComposite: "source-in",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
