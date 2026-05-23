import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Lenis from "lenis";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  useEffect(() => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => lenis.destroy();
}, []);


  const PHONE = "+20 109 733 2336";
  const WHATSAPP_NUMBER = "201097332336";

  const projects = [
    {
      name: "Cafe Website (CafeDemo)",
      desc: "Luxury café landing page built with React + Tailwind CSS",
      link: "http://cafedemo-portfolio.vercel.app/",
    },
    {
      name: "Gym Landing Page",
      desc: "High conversion fitness website",
      link: "#",
    },
    {
      name: "Real Estate UI",
      desc: "Modern property listing interface",
      link: "#",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    try {
      await emailjs.send(
        "service_opyze2g",
        "template_swgua1n",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "EvvjimI4p293iE8zL"
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* FLOATING CTA */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="bg-green-500 px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          WhatsApp
        </a>

        <a
          href="#contact"
          className="bg-white text-black px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          Hire Me
        </a>
      </div>

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold tracking-wide">
            Youssef Hossam <span className="text-white/40">// Developer</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#why">Why Me</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2 text-gray-300">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#why">Why Me</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* HERO (ULTRA PREMIUM) */}
      <motion.section
  id="home"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden"
>

  {/* NOISE / DEPTH BACKGROUND */}
  <div className="absolute inset-0 bg-black" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#222,black)] opacity-80" />

  <motion.div
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative z-10"
  >

    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
      I DESIGN <br />
      DIGITAL <span className="text-gray-500">SYSTEMS</span>
    </h1>

    <p className="text-gray-400 max-w-xl mx-auto mt-8 text-sm md:text-base">
      Not websites. Not templates. I build conversion-focused digital experiences that behave like products, not pages.
    </p>

    <div className="mt-10 flex justify-center gap-4">
      <a
        href="#work"
        className="px-6 py-3 bg-white text-black hover:scale-105 transition"
      >
        Enter Work
      </a>

      <a
        href="#contact"
        className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition"
      >
        Contact
      </a>
    </div>

  </motion.div>
</motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <h3 className="text-3xl font-bold mb-6">About Me</h3>

        <p className="text-gray-400 leading-relaxed">
          I don’t build websites. I design attention systems.
        </p>
      </motion.section>

      
      {/* WORK */}
<section id="work" className="py-32 px-6 bg-black">

  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-24"
    >
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
        SELECTED <span className="text-gray-500">WORK</span>
      </h2>

      <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm">
        A collection of systems, brands, and digital experiences focused on conversion and identity.
      </p>
    </motion.div>

    <div className="space-y-32">

      {/* PROJECT TEMPLATE */}
      {[
        {
          id: "01",
          tag: "LIVE SYSTEM",
          title: "CafeDemo Experience",
          desc: "A conversion-focused café website designed as a digital product, not a static page.",
          img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
          link: "https://cafedemo-portfolio-39tiemm5s-yyoussefshahins-projects.vercel.app/",
        },
        {
          id: "02",
          tag: "BRAND SYSTEM",
          title: "NOIR Fashion Identity",
          desc: "A brutalist luxury fashion identity system built for modern streetwear brands.",
          img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
          link: "#",
        },
        {
          id: "03",
          tag: "PORTFOLIO ENGINE",
          title: "YH Studio System",
          desc: "A conversion-focused portfolio system designed to turn attention into client inquiries.",
          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          link: "#",
        },
      ].map((p, i) => (
        <motion.a
          key={i}
          href={p.link}
          target={p.link !== "#" ? "_blank" : "_self"}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          whileHover={{ scale: 1.01 }}
          className={`group flex flex-col md:flex-row items-center gap-10 ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >

          {/* IMAGE */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
            <motion.img
              src={p.img}
              className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2">

            <p className="text-green-400 text-xs tracking-[0.3em]">
              {p.id} — {p.tag}
            </p>

            <h3 className="text-4xl font-bold mt-4 leading-tight group-hover:tracking-wide transition-all duration-300">
              {p.title}
            </h3>

            <p className="text-gray-400 mt-6 text-sm leading-relaxed">
              {p.desc}
            </p>

            <motion.p
              whileHover={{ x: 10 }}
              className="text-white/50 mt-8 group-hover:text-white transition cursor-pointer"
            >
              Open Case Study →
            </motion.p>

          </div>

        </motion.a>
      ))}

    </div>
  </div>
</section>

      {/* WHY ME */}
      <section id="why" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Why Clients Choose Me</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Fast Delivery",
              "Modern Clean Design",
              "Business Conversion Focus",
            ].map((t, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-xl bg-black">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let’s Build Something Powerful</h3>

          <p className="text-gray-400 mb-6">
            Have a project? I’ll turn it into a high-converting website.
          </p>

          <p className="text-gray-300 mb-2">📞 {PHONE}</p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="text-green-400 hover:underline"
          >
            WhatsApp Chat
          </a>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Project Idea"
              className="w-full p-3 rounded-xl bg-black border border-white/10 h-32"
            />

            <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-105 transition">
              Send Message
            </button>

            {sent && <p className="text-green-400">Message sent ✔</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-white/10 text-gray-500 text-sm">
        © 2026 Youssef Hossam — Built for clients
      </footer>
    </div>
  );
}
