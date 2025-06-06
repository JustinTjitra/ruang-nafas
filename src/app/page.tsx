import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>My Air Filter Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* If you have a global CSS (e.g. styles/globals.css) that already imports Tailwind,
            you can skip the next line. Otherwise, you can directly pull in the Tailwind CDN here: */}
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </Head>

      {/* NAVIGATION BAR */}
      <header className="bg-sky-400">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo / Site Title */}
          <div className="text-white font-semibold text-xl">
            My Air Filter Project
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-white hover:text-gray-100">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-100">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="text-white hover:text-gray-100">
                Products
              </a>
            </li>
            <li>
              <a href="#team" className="text-white hover:text-gray-100">
                Team
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO / LANDING SECTION (Home) */}
      <main id="home" className="container mx-auto px-4 py-20">
        <div className="bg-sky-50 rounded-lg shadow-md p-12 text-center">
          {/* Blank space for custom text */}
          <h1 className="text-4xl font-bold text-sky-600 mb-6">
            Welcome to My Low-Cost Air Filter & Monitor Project
          </h1>
          <p className="text-gray-700 leading-relaxed">
            {/* 
              Replace this paragraph with your own custom copy.
              e.g. “I’m a student at JIS working on a DIY air filter...” 
            */}
            ________________________________________________________________________
            ________________________________________________________________________
          </p>
        </div>
      </main>

      {/* ABOUT US SECTION */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-sky-600 mb-4">About Us</h2>
        <p className="text-gray-700">
          {/* Add your “About Us” content here */}
          I’m a student at [Your School] working on an affordable air filtration
          system and quality monitors. This project aims to…
        </p>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-sky-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-sky-600 mb-4">Products</h2>
          <p className="text-gray-700 mb-8">
            {/* Describe your filters and sensors here */}
            Explore the low-cost air filter, its components, performance specs,
            and the air quality monitor you built…
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-sky-600 mb-2">
                Low-Cost Air Filter
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of the filter’s design, materials, and how
                it works.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500"
              >
                Learn More
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-sky-600 mb-2">
                Air Quality Monitor
              </h3>
              <p className="text-gray-600 mb-4">
                A quick summary of your monitoring device, what sensors it uses
                (e.g., PM2.5, CO₂), and how to read data.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500"
              >
                Learn More
              </a>
            </div>

            {/* Card 3 (optional) */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-sky-600 mb-2">
                Assembly Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Step-by-step instructions on how to build your filter and
                monitor at home.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500"
              >
                View Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-sky-600 mb-4">Team</h2>
        <p className="text-gray-700 mb-8">
          {/* Introduce yourself and any collaborators here */}
          Meet the students and mentors behind this project…
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4">
              {/* Replace with: 
                  <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover rounded-full" /> 
              */}
            </div>
            <h3 className="text-xl font-medium text-gray-800">Your Name</h3>
            <p className="text-gray-600">Role / Position</p>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4">
              {/* Replace with actual <img> */}
            </div>
            <h3 className="text-xl font-medium text-gray-800">
              Collaborator Name
            </h3>
            <p className="text-gray-600">Role / Position</p>
          </div>

          {/* Add more team members as needed */}
        </div>
      </section>

      {/* FOOTER (optional) */}
      <footer className="bg-sky-400">
        <div className="container mx-auto px-4 py-6 text-center text-white">
          &copy; 2025 My Air Filter Project. All rights reserved.
        </div>
      </footer>
    </>
  );
}
