import { motion } from "framer-motion";
import { cafe } from "../data/cafe";
import Icon from "./Icons";
import { FadeUp } from "./Menu";

const points = [
  { icon: "cup", title: "جاهزة بسرعة", text: "طلبك بيكون جاهز بدقايق، عشان ما توقف يومك." },
  { icon: "leaf", title: "منعشة على طول", text: "مشروبات باردة بفواكه طازة لكل مشوار." },
  { icon: "pastry", title: "معك بكل طريق", text: "للدوام، للجامعة، أو لمشوار مع الصحاب." },
];

export default function Story() {
  return (
    <section id="story" className="bg-sand overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-24 grid gap-12 md:grid-cols-2 items-center">
        {/* Photo grows a little as it comes into view */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[2.5rem]"
        >
          <img src={cafe.storyImage} alt="قهوة ع الطريق" className="w-full aspect-square object-cover" />
        </motion.div>

        <div>
          <FadeUp>
            <p className="font-latin italic text-caramel text-xl text-right" dir="ltr">Our Story</p>
            <h2 className="font-display text-5xl mt-2 leading-tight">قهوتك ع الطريق</h2>
          </FadeUp>

          <div className="grid gap-4 mt-10">
            {points.map((p, i) => (
              // Cards come in one after the other, and move on hover
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ x: -8 }}
                className="bg-cream rounded-3xl p-5 flex gap-4 items-center"
              >
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-teal text-cream flex items-center justify-center">
                  <Icon name={p.icon} className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="text-ink/70 text-sm mt-1">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
