import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Lenis from "lenis";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const PHONE = "+20 109 733 2336";
  const WHATSAPP_NUMBER = "201097332336";

  // Apple smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Custom cursor
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

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
    } catch {
      alert("Failed to send message");
    }
  };

  const MagneticButton = ({ children }) => (
    <button
      onMouseMove={(e) => {
        const x = (e.nativeEvent.offsetX - e.target.clientWidth / 2) / 10;
        const y = (e.nativeEvent.offsetY - e.target.clientHeight / 2) / 10;
        e.target.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={(e) => (e.target.style.transform = "translate(0px,0px)")}
      className="transition duration-200"
    >
      {children}
    </button>
  );

  const reveal = {
    hidden: { opacity: 0, y: 80, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1 } },
  };

  const projects = [
    {
      id: "01",
      tag: "LIVE SYSTEM",
      title: "CafeDemo Experience",
      desc: "Conversion-focused café website built as a digital product.",
      img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
      link: "https://cafedemo-portfolio-39tiemm5s-yyoussefshahins-projects.vercel.app/",
    },
    {
      id: "02",
      tag: "BRAND SYSTEM",
      title: "NOIR Fashion Identity",
      desc: "Luxury brutalist fashion identity system for modern brands.",
      img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
      link: "#",
    },
    {
      id: "03",
      tag: "PORTFOLIO ENGINE",
      title: "YH Studio System",
      desc: "Conversion-focused portfolio designed to generate clients.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      link: "#",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* CURSOR */}
      <div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference z-[999]"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[160px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      </div>

      {/* PAGE FADE IN */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-black z-[9999] pointer-events-none"
      />

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          DIGITAL EXPERIENCE STUDIO
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl">
          We design and build high-performance websites that convert visitors into clients.
        </p>

        <div className="mt-10 flex gap-4">
          <MagneticButton>
            <a href="#work" className="px-6 py-3 bg-white text-black rounded-xl">
              View Work
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="#contact" className="px-6 py-3 border border-white/20 rounded-xl">
              Contact
            </a>
          </MagneticButton>
        </div>
      </section>

      {/* WORK (CINEMATIC APPLE STYLE) */}
      <section id="work" className="py-40 px-6 relative z-10">

        <div className="text-center mb-32">
          <h2 className="text-6xl font-bold tracking-tighter">
            SELECTED <span className="text-gray-500">WORK</span>
          </h2>
        </div>

        <div className="space-y-40 max-w-6xl mx-auto">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`md:flex items-center gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={p.img}
                className="md:w-1/2 h-[500px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-700"
              />

              <div className="md:w-1/2 mt-10 md:mt-0">
                <p className="text-green-400 text-xs tracking-[0.3em]">
                  {p.id} — {p.tag}
                </p>

                <h3 className="text-4xl font-bold mt-4">{p.title}</h3>

                <p className="text-gray-400 mt-6">{p.desc}</p>

                <p className="text-white/50 mt-8">Open Case Study →</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold">Let’s Build Something Powerful</h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
          <input className="w-full p-3 bg-black border border-white/10 rounded-xl"
            name="name" placeholder="Name" onChange={handleChange} />

          <input className="w-full p-3 bg-black border border-white/10 rounded-xl"
            name="email" placeholder="Email" onChange={handleChange} />

          <textarea className="w-full p-3 bg-black border border-white/10 rounded-xl h-32"
            name="message" placeholder="Message" onChange={handleChange} />

          <button className="w-full bg-white text-black py-3 rounded-xl">
            Send Message
          </button>

          {sent && <p className="text-green-400">Message sent ✔</p>}
        </form>
      </section>

      {/* FOOTER WITH WATERMARK */}
      <footer className="py-10 text-center border-t border-white/10 text-gray-500 text-sm">
        © 2026 YH Studio — Built by Youssef Hossam
      </footer>

    </div>
  );
}