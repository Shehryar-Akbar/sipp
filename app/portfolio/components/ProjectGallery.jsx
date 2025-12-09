"use client";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";
import React from "react";

const projects = [
  {
    title: "Kabul University Banner Print",
    src: "/portfolio/img1.jpg",
    color: "#000000",
    description: "Banners",
  },
  {
    title: "Alokozay Branding Prints",
    src: "/portfolio/img2.jpg",
    color: "#8C8C8C",
    description: "Banners",
  },
  {
    title: "United Nations Peace Banner",
    src: "/portfolio/img3.jpg",
    color: "#EFE8D3",
    description: "Banners",
  },
  {
    title: "Mr. Khedmatgar's Book Cover",
    src: "/portfolio/img4.jpg",
    color: "#706D63",
    description: "Literature",
  },
  {
    title: "AGRO-GREEN Pamphlet Design",
    src: "/portfolio/img5.jpg",
    color: "#706D63",
    description: "Pamphlets/Flyers",
  },
  {
    title: "EDU TECH Kabul Sign Board",
    src: "/portfolio/img6.jpg",
    color: "#706D63",
    description: "Signage",
  },
  {
    title: "Kabulride.com Flyer Prints",
    src: "/portfolio/img7.jpg",
    color: "#706D63",
    description: "Flyers",
  },
  {
    title: "Hotel Banner Print",
    src: "/portfolio/img8.jpg",
    color: "#706D63",
    description: "Banners",
  },
  {
    title: "Educational Flyer Designs",
    src: "/portfolio/img9.jpg",
    color: "#706D63",
    description: "Flyers",
  },
  {
    title: "Ministry of Foreign Affairs Banner",
    src: "/portfolio/img10.jpg",
    color: "#706D63",
    description: "Banners",
  },
];

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

export default ProjectsGallery;
