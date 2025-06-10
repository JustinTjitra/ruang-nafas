// app/page.tsx (or pages/index.tsx)

import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ruang Nafas</title>
      </Head>

      {/* ─────── Single Fragment & Single Root <div> ─────── */}
      <div
        className="
          w-[1440px] h-[5423px] relative 
          bg-gradient-to-br from-stone-50 
          outline outline-1 outline-offset-[-1px] outline-black 
          overflow-hidden
        "
      >
        {/* Hero Image */}
        <div className="w-[1453px] h-[2363px] absolute left-[1px] top-[677px]">
          <Image
            className="absolute left-0 top-0 w-[1453px] h-[2363px]"
            src="https://placehold.co/1453x2363"
            alt="Hero placeholder"
            width={1453}
            height={2363}
          />
        </div>

        {/* Secondary Image */}
        <div className="w-[1440px] h-[1257px] absolute left-0 top-[3582px]">
          <Image
            className="absolute left-0 top-0 w-[1440px] h-[1257px]"
            src="https://placehold.co/1440x1257"
            alt="Secondary placeholder"
            width={1440}
            height={1257}
          />
        </div>

        {/* Our Team Heading */}
        <div
          className="
            w-[455px] absolute left-[490px] top-[3904px]
            text-center text-stone-50 text-6xl font-bold 
            font-['Outfit'] capitalize leading-[57px]
          "
        >
          Our Team
        </div>

        {/* Team Member 1 */}
        <div className="w-80 h-80 absolute left-[186px] top-[4024px] bg-slate-400 rounded-full" />
        <div
          className="
            w-72 h-20 absolute left-[204px] top-[4405px] 
            text-white text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Idk a short title desc or smthin yeeppii
        </div>
        <div
          className="
            w-72 h-12 absolute left-[204px] top-[4352px] 
            text-center text-white text-4xl font-bold 
            font-['Outfit'] capitalize leading-10
          "
        >
          Justin Tjitra
        </div>

        {/* Team Member 2 */}
        <div className="w-80 h-80 absolute left-[561px] top-[4024px] bg-slate-400 rounded-full" />
        <div
          className="
            w-72 h-20 absolute left-[579px] top-[4405px] 
            text-white text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Idk a short title desc or smthin yeeppii
        </div>
        <div
          className="
            w-72 h-12 absolute left-[579px] top-[4352px] 
            text-center text-white text-4xl font-bold 
            font-['Outfit'] capitalize leading-10
          "
        >
          Kalista Kolim
        </div>

        {/* Team Member 3 */}
        <div className="w-80 h-80 absolute left-[936px] top-[4024px] bg-slate-400 rounded-full" />
        <div
          className="
            w-72 h-20 absolute left-[954px] top-[4405px] 
            text-white text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Idk a short title desc or smthin yeeppii
        </div>
        <div
          className="
            w-72 h-12 absolute left-[954px] top-[4352px] 
            text-center text-white text-4xl font-bold 
            font-['Outfit'] capitalize leading-10
          "
        >
          Name
        </div>

        {/* Overlay Behind “Our Products” */}
        <div
          className="
            w-[2061px] h-[831.50px] absolute 
            left-[-259px] top-[2848px] bg-zinc-300/90
          "
        />

        {/* Our Products Heading */}
        <div
          className="
            w-[455px] absolute left-[492px] top-[2986px]
            text-center text-slate-500 text-6xl font-bold 
            font-['Outfit'] capitalize leading-[57px]
          "
        >
          Our products
        </div>

        {/* “Filters” Button */}
        <div
          className="
            w-60 h-12 px-20 py-2.5 absolute left-[224px] top-[3437px] 
            bg-slate-400 rounded-3xl inline-flex 
            justify-center items-center gap-2.5
          "
        >
          <div
            className="
              text-center text-white text-xl font-semibold 
              font-['Outfit'] uppercase leading-7 tracking-widest
            "
          >
            Filters
          </div>
        </div>

        {/* Product Card 1 */}
        <div className="w-80 h-80 absolute left-[188px] top-[3106px] bg-slate-400 rounded-[20px]" />
        <div
          className="
            w-72 h-20 absolute left-[206px] top-[3500px] 
            text-slate-500 text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Short desc of this certain product so that there is something to write
          about yey.
        </div>

        {/* “Sensors” Button */}
        <div
          className="
            w-60 h-12 px-20 py-2.5 absolute left-[599px] top-[3437px] 
            bg-slate-400 rounded-3xl inline-flex 
            justify-center items-center gap-2.5
          "
        >
          <div
            className="
              text-center text-white text-xl font-semibold 
              font-['Outfit'] uppercase leading-7 tracking-widest
            "
          >
            Sensors
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="w-80 h-80 absolute left-[563px] top-[3106px] bg-slate-400 rounded-[20px]" />
        <div
          className="
            w-72 h-20 absolute left-[581px] top-[3500px] 
            text-slate-500 text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Short desc of this certain product so that there is something to write
          about yey.
        </div>

        {/* “Other thing” Button */}
        <div
          className="
            w-60 h-12 px-20 py-2.5 absolute left-[974px] top-[3437px] 
            bg-slate-400 rounded-3xl inline-flex 
            justify-center items-center gap-2.5
          "
        >
          <div
            className="
              text-center text-white text-xl font-semibold 
              font-['Outfit'] uppercase leading-7 tracking-widest
            "
          >
            Other thing
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="w-80 h-80 absolute left-[938px] top-[3106px] bg-slate-400 rounded-[20px]" />
        <div
          className="
            w-72 h-20 absolute left-[956px] top-[3500px] 
            text-slate-500 text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Short desc of this certain product so that there is something to write
          about yey.
        </div>

        {/* “bicara Udara” Section */}
        <div
          className="
            w-[525px] absolute left-[280px] top-[2438px] 
            text-slate-500 text-4xl font-bold 
            font-['Outfit'] capitalize leading-10
          "
        >
          bicara Udara
        </div>
        <div
          className="
            w-[521px] absolute left-[282px] top-[2489px] 
            text-slate-500 text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Some very important text regarding the importance of the project
          (basically short desc on product). Write maybe a bit moreee up until
          here Orrr write some moreeeeee
          <br />
          Perhaps write even more detals or smthn (BUild)
        </div>
        <div className="w-80 h-80 absolute left-[820px] top-[2418px] bg-zinc-300 rounded-[67px]" />

        {/* “Installation” Section */}
        <div
          className="
            w-[525px] absolute left-[661px] top-[2059px] 
            text-slate-500 text-4xl font-bold 
            font-['Outfit'] capitalize leading-10
          "
        >
          Installation
        </div>
        <div
          className="
            w-[500px] absolute left-[663px] top-[2110px] 
            text-slate-500 text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Some very important text regarding the importance of the project
          (basically short desc on product). Write maybe a bit moreee up until
          here Orrr write some moreeeeee
          <br />
          Perhaps write even more detals or smthn
        </div>
        <div className="w-80 h-80 absolute left-[278px] top-[2013px] bg-zinc-300 rounded-[67px]" />

        {/* “lead week” Section */}
        <div
          className="
            w-[525px] absolute left-[278px] top-[1628px] 
            text-slate-500 text-4xl font-bold 
            font-['Outfit'] capitalize leading-10
          "
        >
          lead week
        </div>
        <div
          className="
            w-[523px] absolute left-[280px] top-[1679px] 
            text-slate-500 text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Some very important text regarding the importance of the project
          (basically short desc on product). Write maybe a bit moreee up until
          here Orrr write some moreeeeee
          <br />
          Perhaps write even more detals or smthn (BUild)
        </div>
        <div className="w-80 h-80 absolute left-[818px] top-[1608px] bg-zinc-300 rounded-[67px]" />

        {/* “what we have accomplished” Heading */}
        <div
          className="
            w-[1065px] absolute left-[188px] top-[1473px] 
            text-center text-slate-500 text-7xl font-bold 
            font-['Outfit'] capitalize leading-[70px]
          "
        >
          what we have accomplished
        </div>

        {/* “Introduction” Heading */}
        <div
          className="
            w-[455px] absolute left-[728px] top-[1003px] 
            text-slate-500 text-6xl font-bold 
            font-['Outfit'] capitalize leading-[57px]
          "
        >
          Introduction
        </div>
        <div
          className="
            w-96 absolute left-[728px] top-[1094px] 
            text-slate-500 text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Some very important text regarding the importance of the project
          (basically short desc on product). Write maybe a bit moreee up until
          here Orrr write some moreeeeee
          <br />
        </div>
        <div
          className="
            absolute left-[730px] top-[975px] 
            text-slate-500 text-base font-normal font-['Roboto'] uppercase leading-7
          "
        >
          About Us
        </div>
        <div
          className="
            w-64 h-14 px-12 py-3.5 absolute left-[728px] top-[1305px] 
            bg-slate-500 rounded-[44px] inline-flex justify-center items-center gap-2.5
          "
        >
          <div
            className="
              text-center text-white text-xl font-semibold 
              font-['Outfit'] uppercase leading-7 tracking-widest
            "
          >
            Learn More
          </div>
        </div>
        <div className="w-[525px] h-[525px] absolute left-[188px] top-[914px] bg-zinc-300 rounded-[67px]" />
        <Image
          className="absolute left-[733px] top-[134px] w-[525px] h-[525px] rounded-[51px]"
          src="https://placehold.co/525x525"
          alt="Hero small"
          width={525}
          height={525}
        />

        {/* “Ruang Nafas” Title */}
        <div
          className="
            w-[455px] absolute left-[188px] top-[231px] 
            text-slate-500 text-7xl font-bold 
            font-['Outfit'] capitalize leading-[70px]
          "
        >
          Ruang Nafas
        </div>
        <div
          className="
            w-96 absolute left-[193px] top-[323px] 
            text-slate-500 text-lg font-normal font-['Roboto'] leading-7
          "
        >
          Some very important text regarding the importance of the project
          (basically short desc on product). Write maybe a bit moreee up until
          here
          <br />
        </div>
        <div
          className="
            w-64 h-14 px-12 py-3.5 absolute left-[193px] top-[493px] 
            bg-stone-300 rounded-[44px] inline-flex justify-center items-center gap-2.5
          "
        >
          <div
            className="
              text-center text-stone-500 text-xl font-semibold 
              font-['Outfit'] uppercase leading-7 tracking-widest
            "
          >
            About us
          </div>
        </div>
        <div
          className="
            w-64 h-14 px-11 py-3.5 absolute left-[463px] top-[493px] 
            rounded-[44px] outline outline-2 outline-offset-[-2px] outline-stone-300 
            inline-flex justify-center items-center gap-2.5
          "
        >
          <div
            className="
              text-center text-stone-500 text-xl font-semibold 
              font-['Outfit'] uppercase leading-7 tracking-widest
            "
          >
            Products
          </div>
        </div>

        {/* Top Nav Bar & Logo */}
        <div className="w-[1440px] h-24 absolute left-[-2px] top-[-23px] bg-white/60 rounded-2xl" />
        <Image
          className="absolute left-[50px] top-[20px] w-20 h-14 rounded-[29.50px]"
          src="https://placehold.co/73x59"
          alt="Logo placeholder"
          width={73}
          height={59}
        />
        <div
          className="
            w-36 h-8 absolute left-[142.2px] top-[33px] 
            text-black text-xl font-normal font-['Outfit'] uppercase leading-7
          "
        >
          Home
        </div>
        <div
          className="
            absolute left-[914px] top-[33px] 
            text-black text-xl font-normal font-['Outfit'] capitalize leading-7
          "
        >
          About Us
        </div>
        <div
          className="
            absolute left-[1068px] top-[33px] 
            text-black text-xl font-normal font-['Outfit'] capitalize leading-7
          "
        >
          Products
        </div>
        <div
          className="
            absolute left-[1220px] top-[33px] 
            text-black text-xl font-normal font-['Outfit'] capitalize leading-7
          "
        >
          Team
        </div>
        <div
          className="
            absolute left-[1343px] top-[33px] 
            text-black text-xl font-normal font-['Outfit'] capitalize leading-7
          "
        >
          Other
        </div>
      </div>
      {/* ──────────────────────────────────────────────────── */}
    </>
  );
}
