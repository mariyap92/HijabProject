
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#44372F]">

      {/* Announcement bar */}
      <div className="bg-[#44372F] py-2 text-center text-sm text-white">
        Welcome to HAYAA HIJAB
      </div>

      {/* Navigation */}
      <header className="flex items-center justify-between px-6 py-6 md:px-16">
        <h1 className="text-2xl font-semibold tracking-[0.2em]">
          HAYAA HIJAB
        </h1>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#" className="hover:text-[#A1846D]">Home</a>
          <a href="#shop" className="hover:text-[#A1846D]">Shop</a>
          <a href="#about" className="hover:text-[#A1846D]">About</a>
          <a href="#contact" className="hover:text-[#A1846D]">Contact</a>
        </nav>

        <button className="border border-[#44372F] px-5 py-2 text-sm hover:bg-[#44372F] hover:text-white">
          Shop Now
        </button>
      </header>

      {/* Hero section */}
      <section className="grid min-h-[600px] items-center md:grid-cols-2">

        <div className="px-8 py-16 md:px-20">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A1846D]">
            Elegance in every layer
          </p>

          <h2 className="mb-6 text-5xl font-light leading-tight md:text-7xl">
            Modesty meets
            <span className="block font-semibold">
              elegance.
            </span>
          </h2>

          <p className="mb-8 max-w-md leading-8 text-[#796B60]">
            Discover timeless hijabs and thoughtfully
            curated pieces designed to celebrate
            confidence, beauty and individuality.
          </p>

          <a
            href="#shop"
            className="inline-block bg-[#44372F] px-9 py-4 text-sm tracking-widest text-white transition hover:bg-[#806552]"
          >
            EXPLORE COLLECTION
          </a>
        </div>

        <div className="flex min-h-[450px] items-center justify-center bg-[#E9DFD3] p-10">
          <div className="text-center">
            <p className="text-7xl font-light tracking-widest text-[#806552]">
              H H
            </p>
            <p className="mt-5 text-xs tracking-[0.4em] text-[#806552]">
              TIMELESS MODESTY
            </p>
          </div>
        </div>

      </section>

      {/* Collection introduction */}
      <section id="shop" className="px-8 py-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A1846D]">
          Discover HAYAA
        </p>

        <h2 className="mb-5 text-3xl font-light md:text-4xl">
          Designed for your everyday elegance
        </h2>

        <p className="mx-auto max-w-xl leading-7 text-[#796B60]">
          From everyday essentials to special occasions,
          discover pieces that make modest dressing effortless.
        </p>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#44372F] px-8 py-10 text-center text-white"
      >
        <h2 className="mb-3 text-xl tracking-[0.2em]">
          HAYAA HIJAB
        </h2>

        <p className="text-sm text-[#E9DFD3]">
          Elegance in every layer.
        </p>

        <p className="mt-6 text-xs text-[#D0BFAF]">
          © {new Date().getFullYear()} HAYAA HIJAB. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
