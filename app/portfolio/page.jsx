"use client";
import { useState } from "react";
import Project from "./components/project";
import Modal from "./components/modal";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/portfolio/hero.jpg";
import img1 from "../../public/portfolio/img1.jpg";
import img2 from "../../public/portfolio/img2.jpg";
import img3 from "../../public/portfolio/img3.jpg";
import img4 from "../../public/portfolio/img4.jpg";
import img5 from "../../public/portfolio/img5.jpg";
import img6 from "../../public/portfolio/img6.jpg";
import img7 from "../../public/portfolio/img7.jpg";
import img8 from "../../public/portfolio/img8.jpg";
import img9 from "../../public/portfolio/img9.jpg";
import img10 from "../../public/portfolio/img10.jpg";

const projects = [
  {
    title: "Kabul University Banner Print",
    src: img1,
    color: "#000000",
    description: "Banners",
  },
  {
    title: "Alokozay Branding Prints",
    src: img2,
    color: "#8C8C8C",
    description: "Banners",
  },
  {
    title: "United Nations Peace Banner",
    src: img3,
    color: "#EFE8D3",
    description: "Banners",
  },
  {
    title: "Mr. Khedmatgar's Book Cover",
    src: img4,
    color: "#706D63",
    description: "Literature",
  },
  {
    title: "AGRO-GREEN Pamphlet Design",
    src: img5,
    color: "#706D63",
    description: "Pamphlets/Flyers",
  },
  {
    title: "EDU TECH Kabul Sign Board",
    src: img6,
    color: "#706D63",
    description: "Signage",
  },
  {
    title: "Kabulride.com Flyer Prints",
    src: img7,
    color: "#706D63",
    description: "Flyers",
  },
  {
    title: "Hotel Banner Print",
    src: img8,
    color: "#706D63",
    description: "Banners",
  },
  {
    title: "Educational Flyer Designs",
    src: img9,
    color: "#706D63",
    description: "Flyers",
  },
  {
    title: "Ministry of Foreign Affairs Banner",
    src: img10,
    color: "#706D63",
    description: "Banners",
  },
];

const ContactHero = () => {
  return (
    <section className="relative h-screen overflow-hidden ">
      <Image
        src={hero}
        alt="About Hero Background"
        fill
        className="object-cover blur-md scale-110"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none max-sm:items-start max-sm:mt-16 max-xl:items-start! max-xl:mt-40">
        <div
          className="hero-heading-container pointer-events-auto mx-auto text-center border
          lg:max-w-[90%] 2xl:max-w-[75%] max-sm:px-4 max-sm:pt-8"
        >
          <h1 className="font-bold text-white text-center leading-none drop-shadow-2xl mb-6 max-sm:text-5xl! sm:text-5xl! md:text-6xl! lg:text-8xl max-xl:text-7xl max-sm:text-left! xl:text-8xl!">
            Best Printing Services in Afghanistan. We Print What You Think
          </h1>

          <p className="text-lg! sm:text-xl! md:text-3xl! max-sm:text-2xl! max-sm:text-left! max-sm:leading-[0.9]! text-white/80! lg:w-11/12  my-8! mx-auto drop-shadow-xl leading-7">
            Your trusted partner for professional printing services in
            Afghanistan. From brochures to books, business cards to banners, we
            deliver excellence in every print.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-sm:mt-8 md:mt-20!">
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-20 py-4 max-sm:py-3! max-sm:w-[80%]! max-sm:px-16 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600! transition-all inline-flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectsGallery() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className="py-8 max-sm:overflow-x-hidden!">
        <h2 className="lg:text-7xl! my-12! w-full text-center md:text-5xl! sm:text-4xl! max-sm:text-3xl!">
          Ink, Paper, Perfection! See Our Finest Work.
        </h2>

        {projects.map((project, index) => (
          <Project
            index={index}
            title={project.title}
            description={project.description}
            setModal={setModal}
            key={index}
          />
        ))}
      </div>

      <Modal modal={modal} projects={projects} />
    </>
  );
}

const page = () => {
  return (
    <>
      <ContactHero />
      <ProjectsGallery />
    </>
  );
};

export default page;
