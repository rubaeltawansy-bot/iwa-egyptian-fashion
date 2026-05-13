export default function IWAFashionStore() {
  const categories = [
    {
      name: "Oversized T-Shirts",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Egyptian Cotton",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Linen Shirts",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const products = [
    {
      name: "Pharaoh Oversized Tee",
      price: "EGP 850",
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Nile Cotton T-Shirt",
      price: "EGP 720",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Royal Linen Shirt",
      price: "EGP 1200",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#F5F1EA] text-black min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-[#C9A45C] bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold tracking-widest text-[#C9A45C]">
            IWA
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#home" className="hover:text-[#C9A45C] transition">
            Home
          </a>
          <a href="#categories" className="hover:text-[#C9A45C] transition">
            Categories
          </a>
          <a href="#products" className="hover:text-[#C9A45C] transition">
            Shop
          </a>
          <a href="#story" className="hover:text-[#C9A45C] transition">
            Our Story
          </a>
          <a href="#contact" className="hover:text-[#C9A45C] transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
            Cart (0)
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero Banner"
        />

        <div className="relative z-20 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-[#D4AF37] leading-tight uppercase tracking-widest">
            IWA
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white leading-relaxed">
            We are reviving the forgotten Egyptian soul and bringing back the
            greatness of our Pharaonic identity through modern fashion.
          </p>

          <p className="mt-4 text-lg text-[#E5D2A3] italic">
            "As Egyptians, we slowly followed the western identity and forgot
            who we truly are."
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-[#C9A45C] hover:bg-[#b48d41] text-white px-8 py-4 rounded-full text-lg transition shadow-xl">
              Shop Now
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg transition">
              Discover The Story
            </button>
          </div>
        </div>
      </section>

      {/* Egyptian Design Divider */}
      <div className="py-10 bg-black text-[#C9A45C] text-center tracking-[10px] text-sm uppercase">
        Ancient Egypt • Heritage • Identity • Culture • Legacy
      </div>

      {/* Categories */}
      <section id="categories" className="px-8 md:px-16 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-wider text-[#C9A45C]">
            Shop By Category
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Easily add new categories later from your dashboard such as Hoodies,
            Accessories, Jackets, Handmade Collections, or Limited Pharaoh
            Editions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden shadow-2xl bg-white"
            >
              <div className="overflow-hidden h-[450px]">
                <img
                  src={category.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  alt={category.name}
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#C9A45C] uppercase tracking-wide">
                  {category.name}
                </h3>

                <button className="mt-5 bg-black text-white px-6 py-3 rounded-full hover:bg-[#C9A45C] transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="bg-[#111111] py-24 px-8 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-wider text-[#C9A45C]">
            Featured Collection
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Every design is inspired by ancient Egyptian symbols, architecture,
            kings, queens, hieroglyphics, and modern luxury fashion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="h-[400px] overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  alt={product.name}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{product.name}</h3>

                <p className="text-[#C9A45C] text-xl mt-2 font-semibold">
                  {product.price}
                </p>

                <button className="w-full mt-6 bg-[#C9A45C] hover:bg-black text-white py-4 rounded-2xl transition text-lg">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="story"
        className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-24"
      >
        <div>
          <h2 className="text-5xl font-bold text-[#C9A45C] uppercase leading-tight">
            More Than Fashion
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            IWA is not just a clothing brand. It is a movement inspired by the
            soul of Ancient Egypt. We combine luxury fashion with authentic
            Egyptian heritage to create a modern identity that reconnects people
            with their roots.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Through every collection, we remind Egyptians and the world of the
            greatness, beauty, and creativity of our civilization.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-[#C9A45C] transition">
            Learn More
          </button>
        </div>

        <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#C9A45C]">
          <img
            src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f0e?q=80&w=1400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="About IWA"
          />
        </div>
      </section>

      {/* Payment Section */}
      <section className="bg-[#C9A45C] py-20 px-8 md:px-16 text-center text-black">
        <h2 className="text-4xl font-bold uppercase">Secure Online Payment</h2>

        <p className="mt-5 max-w-3xl mx-auto text-lg">
          Your website can support Visa, Mastercard, Apple Pay, Vodafone Cash,
          Paymob, Stripe, and Cash on Delivery.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {[
            "Visa",
            "Mastercard",
            "Apple Pay",
            "Paymob",
            "Stripe",
            "Cash On Delivery",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white px-6 py-4 rounded-2xl shadow-lg font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-8 md:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#C9A45C] uppercase">
            Contact IWA
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Start your Egyptian fashion journey with us.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#1B1B1B] border border-[#C9A45C] rounded-2xl px-6 py-4 outline-none text-white placeholder-gray-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#1B1B1B] border border-[#C9A45C] rounded-2xl px-6 py-4 outline-none text-white placeholder-gray-500"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full mt-6 bg-[#1B1B1B] border border-[#C9A45C] rounded-2xl px-6 py-4 outline-none text-white placeholder-gray-500"
          ></textarea>

          <button className="mt-8 bg-[#C9A45C] hover:bg-white hover:text-black text-white px-10 py-4 rounded-full text-lg transition">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-gray-400 py-8 text-center border-t border-[#C9A45C]">
        <p>
          © 2026 IWA — Inspired by Ancient Egypt & Modern Luxury Fashion.
        </p>
      </footer>
    </div>
  );
}
