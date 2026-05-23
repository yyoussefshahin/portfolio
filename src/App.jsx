export default function VelvetBrewCafe() {
  const menuItems = [
    {
      name: "Espresso",
      desc: "Rich and bold handcrafted espresso.",
      price: "$4",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Matcha Latte",
      desc: "Smooth premium Japanese matcha.",
      price: "$6",
      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Chocolate Cake",
      desc: "Soft layered cake with dark chocolate.",
      price: "$8",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const reviews = [
    {
      name: "Sarah M.",
      review:
        "One of the most beautiful cafés I’ve visited. Amazing coffee and atmosphere.",
    },
    {
      name: "David R.",
      review:
        "The website experience already feels premium — and the café matches it perfectly.",
    },
    {
      name: "Lina K.",
      review:
        "Beautiful interior, friendly staff, and incredible desserts.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-amber-200">
            Velvet Brew
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#menu" className="hover:text-white transition">
              Menu
            </a>
            <a href="#reviews" className="hover:text-white transition">
              Reviews
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.4em] text-amber-200 mb-4 text-sm">
                Premium Coffee Experience
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Crafted Coffee.
                <br />
                Premium Experience.
              </h1>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                A luxury café experience with handcrafted coffee, elegant desserts,
                and a modern atmosphere designed for comfort and style.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="bg-amber-200 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                  Reserve a Table
                </button>

                <button className="border border-white/30 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
              alt="Cafe"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-amber-200 uppercase tracking-[0.3em] text-sm mb-4">
              About Us
            </p>

            <h2 className="text-4xl font-bold mb-6">
              More Than Coffee — It’s An Experience.
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Velvet Brew combines premium coffee craftsmanship with luxury modern
              interior design to create a relaxing destination for coffee lovers,
              creatives, and friends.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/10">
                <h3 className="text-3xl font-bold text-amber-200">10K+</h3>
                <p className="text-gray-400 mt-2 text-sm">Customers</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/10">
                <h3 className="text-3xl font-bold text-amber-200">4.9</h3>
                <p className="text-gray-400 mt-2 text-sm">Rating</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/10">
                <h3 className="text-3xl font-bold text-amber-200">2018</h3>
                <p className="text-gray-400 mt-2 text-sm">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-200 uppercase tracking-[0.3em] text-sm mb-4">
              Featured Menu
            </p>

            <h2 className="text-4xl font-bold">Customer Favorites</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <span className="text-amber-200 font-bold">{item.price}</span>
                  </div>

                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-200 uppercase tracking-[0.3em] text-sm mb-4">
              Testimonials
            </p>

            <h2 className="text-4xl font-bold">What Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl"
              >
                <p className="text-gray-300 leading-relaxed mb-6">
                  “{review.review}”
                </p>

                <h4 className="font-semibold text-amber-200">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-200 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Visit Velvet Brew Today
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Experience handcrafted coffee, premium desserts, and a relaxing modern
            atmosphere in the heart of the city.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-400">Downtown Cairo</p>
            </div>

            <div className="bg-black p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-400">+20 109 7332 336</p>
            </div>

            <div className="bg-black p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold text-lg mb-2">Hours</h3>
              <p className="text-gray-400">8 AM — 12 AM</p>
            </div>
          </div>

          <button className="bg-amber-200 text-black px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Velvet Brew Café — Premium Portfolio Project
      </footer>
    </div>
  );
}
