import { motion } from "framer-motion";
import { cafe } from "../data/cafe";
import { FadeUp } from "./Menu";

export default function Visit() {
  return (
    <section id="visit" className="bg-teal-dark text-cream">
      <div className="max-w-6xl mx-auto px-5 py-24 grid gap-12 md:grid-cols-2 items-center">
        <FadeUp>
          <p className="font-latin italic text-caramel text-xl text-right" dir="ltr">Visit Us</p>
          <h2 className="font-display text-5xl mt-2">مرّوا علينا</h2>
          {cafe.address && <p className="text-sand/80 mt-4">{cafe.address}</p>}

          <div className="flex flex-wrap gap-3 mt-8">
            {cafe.whatsapp && (
              <motion.a
                href={`https://wa.me/${cafe.whatsapp}`}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-caramel text-ink font-medium px-7 py-3 rounded-full"
              >
                اطلب واتساب
              </motion.a>
            )}
            <motion.a
              href={cafe.instagram}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cream text-teal-dark font-medium px-7 py-3 rounded-full"
            >
              تابعونا على إنستغرام
            </motion.a>
          </div>
        </FadeUp>

        {/* Hours show only when they are filled in */}
        {cafe.hours.length > 0 && (
          <FadeUp delay={0.2} className="bg-teal rounded-3xl p-8">
            <h3 className="font-display text-2xl text-caramel">أوقات الدوام</h3>
            <ul className="mt-4 divide-y divide-cream/10">
              {cafe.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 py-4">
                  <span>{h.days}</span>
                  <span className="text-sand/80">{h.time}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        )}
      </div>

      <footer className="border-t border-cream/10 py-6 text-center text-sm text-sand/60">
        تصميم وتطوير{" "}
        <a href="https://www.instagram.com/oneclick.ps" target="_blank" className="font-medium text-caramel">
          One Click
        </a>
      </footer>
    </section>
  );
}
