import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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
        className="pt-40 pb-28 text-center px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-black blur-3xl"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold relative"
        >
          I Build Websites That <br /> Bring You Clients
        </motion.h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto relative">
          Freelance Web Developer focused on conversion-driven design, modern UI systems, and fast scalable web apps for real businesses.
        </p>

        <div className="mt-10 flex justify-center gap-4 relative">
          <a
            href="#work"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
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
          I help businesses turn ideas into high-performing websites that generate real revenue. My focus is not design alone — it's building systems that convert visitors into paying customers.
        </p>
      </motion.section>

      {/* WORK */}
      {/* WORK */}
<section id="work" className="py-28 px-6 bg-black">
  <div className="max-w-6xl mx-auto">

    {/* SECTION TITLE */}
    <div className="text-center mb-16">
      <h3 className="text-3xl md:text-5xl font-light tracking-widest">
        SELECTED WORK
      </h3>
      <p className="text-gray-500 mt-4 text-sm">
        High-end digital experiences for brands & businesses
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* PROJECT 1 - LIVE */}
      <a
        href="https://cafedemo-portfolio-39tiemm5s-yyoussefshahins-projects.vercel.app/"
        target="_blank"
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >

        {/* IMAGE */}
        <div className="h-72 bg-[url('https://images.unsplash.com/photo-1521017432531-fbd92d768814')] bg-cover bg-center group-hover:scale-110 transition duration-700" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

        {/* TEXT */}
        <div className="absolute bottom-0 p-6">
          <p className="text-green-400 text-xs tracking-widest">
            LIVE PROJECT
          </p>

          <h4 className="text-xl font-light mt-1">
            CafeDemo — Luxury Café Experience
          </h4>

          <p className="text-gray-400 text-sm mt-2">
            Conversion-focused café website with premium UI/UX system.
          </p>

          <p className="text-white/60 text-xs mt-4 group-hover:text-white transition">
            View Live →
          </p>
        </div>
      </a>

     
      {/* PROJECT 2 */}
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">

        <div className="h-72 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')] bg-cover bg-center group-hover:scale-110 transition duration-700" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

        <div className="absolute bottom-0 p-6">
          <p className="text-green-400 text-xs tracking-widest">
            FREELANCER SYSTEM
          </p>

          <h4 className="text-xl font-light mt-1">
            YH Studio — Conversion Portfolio
          </h4>

          <p className="text-gray-400 text-sm mt-2">
            Designed to attract clients and convert visitors into leads.
          </p>

          <p className="text-white/50 text-xs mt-4">
            Strategy Build
          </p>
        </div>
      </div>

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
