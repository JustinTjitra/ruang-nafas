import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  const events = [
    { label: "LEAD Week", src: "/leadweekphoto.png" },
    { label: "Car Free Day", src: "/carfree.png" },
    { label: "Santa Ursula Seminar", src: "/sanur.png" },
  ];

  return (
    <>
      <Head>
        <title>Ruang Nafas</title>
      </Head>
      <main className="relative overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50">
          <div className="container mx-auto flex justify-end space-x-8 px-6 py-4">
            <a
              href="#about"
              className="text-black text-lg font-outfit uppercase leading-7"
            >
              About Us
            </a>
            <a
              href="#products"
              className="text-black text-lg font-outfit uppercase leading-7"
            >
              Products
            </a>
            <a
              href="#events"
              className="text-black text-lg font-outfit uppercase leading-7"
            >
              Events
            </a>
            <a
              href="#contacts"
              className="text-black text-lg font-outfit uppercase leading-7"
            >
              Contacts
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-20 relative bg-[#fcfcf8] pb-48">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-8xl font-outfit font-bold text-stone-700 mb-4">
                Ruang Nafas
              </h1>
              <p className="text-lg font-roboto text-stone-500 mb-6">
                A Student Initiative Advocating for Clean Air for All
              </p>
              <div className="flex space-x-4">
                <a
                  href="#about"
                  className="px-6 py-2 bg-stone-200 text-stone-700 rounded-full font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-stone-300 inline-block"
                >
                  About Us
                </a>
                <a
                  href="#products"
                  className="px-6 py-2 border border-stone-200 text-stone-700 rounded-full font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-stone-200 hover:text-white inline-block"
                >
                  Products
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 relative">
              {/* Place your lungs graphic here */}
              <Image
                src="/herosection.png"
                alt="Lungs graphic"
                width={200}
                height={400}
                className="mx-auto w-full h-64 object-contain"
                layout="responsive"
              />
            </div>
          </div>

          {/* SVG wave at bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 1200 120"
              className="w-full h-32"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
                fill="#DCEDEA"
              />
            </svg>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="about" className="relative bg-[#DCEDEA] pt-24 pb-32">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 gap-8 md:gap-16">
            <div className="md:w-1/2 mt-12 md:mt-0">
              <h3 className="text-8xl font-outfit font-bold text-stone-700 mb-4">
                About Us
              </h3>
              <p className="text-base font-roboto text-stone-500 mb-7">
                We're a student group focused on advocating for clean air in
                Indonesia. Through our own skills in engineering and design, we
                created and donated to various schools and communities our own
                low-cost designs for filters and monitors focused on targetting
                the relatively unknown issue of indoor air pollution. Our
                collaboration with BicaraUdara has also enabled us to further
                our messaging and bring this issue more to light through their
                events. Together, we can build a future where every classroom,
                home, and community center in Indonesia has access to the clean
                air through one filter, monitor, and message at a time!
              </p>
              <button className="px-6 py-2 bg-stone-700 text-white rounded-full font-semibold uppercase tracking-wide">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/bicaraudara.png"
                alt="bicaraudaraa"
                width={200}
                height={400}
                className="mx-auto w-full h-64 object-contain"
                layout="responsive"
              />
            </div>
          </div>

          {/* SVG wave transition */}
          <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 leading-none">
            <svg
              viewBox="0 0 1200 120"
              className="w-full h-32"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </section>

        {/* What We Have Accomplished */}
        <section id="products" className="bg-white py-16 px-6">
          <h2 className="text-center text-3xl md:text-4xl font-outfit font-bold text-stone-700 mb-12">
            Advocacy Through Engineering
          </h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Lead Week */}
            <div className="flex items-start space-x-6">
              <div className="bg-[#DCEDEA] w-100 h-48 rounded-lg">
                <Image
                  src="/sensors.png"
                  alt="sensors"
                  width={1000}
                  height={1200}
                  layout="responsive"
                />
              </div>
              <div>
                <h3 className="text-xl font-outfit font-bold text-stone-700 mb-2">
                  AQI Sensors
                </h3>
                <p className="text-base font-roboto text-stone-500">
                  Low-cost module measuring relevant values such as PM2.5, PM10,
                  temperature, and humidity to measure surrounding air quality.
                  We 3D printed our own casing using PLA filament, along with
                  builing and programming the electronics inside.
                </p>
              </div>
            </div>

            {/* Installation */}
            <div className="flex items-start space-x-6">
              <div className="bg-[#DCEDEA] w-200 h-48 rounded-lg">
                <Image
                  src="/filters.png"
                  alt="filters"
                  width={400}
                  height={1000}
                  layout="responsive"
                />
              </div>
              <div>
                <h3 className="text-xl font-outfit font-bold text-stone-700 mb-2">
                  Air Filters
                </h3>
                <p className="text-base font-roboto text-stone-500">
                  DIY and low-cost air filter module that we designed using
                  Fusion360 and built by hand with foam core and 3D printed
                  components. The module mirrors the design of the
                  Corsi-Rosenthal Box, but utilizes materials and filters that
                  are more widely available in Indonesia. Consists of layered
                  prefilters and replaceable HEPA Filters.
                </p>
              </div>
            </div>

            {/* placeholder for layout symmetry */}
            <div />
          </div>
        </section>

        {/* Our Products */}
        <section id="events" className="bg-[#F4F5F5] py-16 px-6">
          <h2 className="text-center text-3xl md:text-4xl font-outfit font-bold text-stone-700 mb-12">
            Events
          </h2>
          <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {events.map(({ label, src }) => (
              <div key={label} className="flex flex-col items-center space-y-4">
                {/* 2) Render the image for each item: */}
                <div className="relative w-56 h-56">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>

                {/* 3) The button stays the same */}
                <button className="px-4 py-2 bg-stone-700 text-white rounded-full text-sm font-outfit uppercase tracking-widest">
                  {label}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section id="contacts" className="bg-[#58869F] py-16 px-6 text-white">
          <h2 className="text-center text-3xl md:text-4xl font-outfit font-bold mb-12">
            Contacts
          </h2>
          <p className="text-center font-roboto">
            Email: justintylertjitra@gmail.com
          </p>
          <p className="text-center font-roboto">Instagram: ruangnafas_id</p>
        </section>
      </main>
    </>
  );
}
