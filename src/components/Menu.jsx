import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, cafe } from "../data/cafe";
import Icon from "./Icons";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const row = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const category = categories.find((c) => c.id === active);

  return (
    <section id="menu" className="max-w-4xl mx-auto px-5 py-24">
      <FadeUp>
        <p className="font-latin italic text-caramel text-xl text-center" dir="ltr">Our Menu</p>
        <h2 className="font-display text-5xl text-center mt-2">المنيو</h2>
      </FadeUp>

      {/* Tabs. The dark pill slides to the chosen tab (layoutId) */}
      <div className="flex gap-2 overflow-x-auto justify-start sm:justify-center mt-10 pb-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`relative shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors ${
              active === c.id ? "text-cream" : "text-ink hover:text-ink"
            }`}
          >
            {active === c.id && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 bg-teal-dark rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <Icon name={c.icon} className="w-5 h-5" />
              {c.title}
            </span>
          </button>
        ))}
      </div>

      {/* When the tab changes, the old list fades out and the new one comes in */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={category.id}
          variants={list}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
          className="mt-10 bg-white/60 rounded-3xl px-6 divide-y divide-sand"
        >
          {category.items.map((item) => (
            <motion.li key={item.name} variants={row} className="py-5 flex gap-4 items-start">
              {item.image && (
                <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    whileHover={{ scale: 1.1 }}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <span className="font-latin italic text-ink/60" dir="ltr">{item.nameEn}</span>
                  {item.tag && (
                    <span className="text-xs bg-caramel/20 text-ink px-2.5 py-0.5 rounded-full">{item.tag}</span>
                  )}
                </div>
                <p className="text-ink/80 mt-1">{item.description}</p>
              </div>
              <p className="font-latin text-2xl whitespace-nowrap">
                {item.price} <span className="text-base">{cafe.currency}</span>
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </section>
  );
}

// Fades in and moves up when it scrolls into view
export function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
