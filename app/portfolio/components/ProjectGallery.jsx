import Image from "next/image";

const images = [
  "/portfolio/img1.jpg",
  "/portfolio/img2.jpg",
  "/portfolio/img3.jpg",
  "/portfolio/img4.jpg",
  "/portfolio/img5.jpg",
  "/portfolio/img6.jpg",
  "/portfolio/img7.jpg",
  "/portfolio/img8.jpg",
  "/portfolio/img9.jpg",
  "/portfolio/img10.jpg",
  "/portfolio/img3.jpg",
  "/portfolio/img4.jpg",
];

export default function ProjectGallery() {
  return (
    <section
      className="
        w-full
        py-4
        sm:h-screen sm:py-0
      "
    >
      <div
        className="
          grid w-full
          h-full

          grid-cols-1
          gap-4
          px-4

          sm:grid-cols-2 sm:grid-rows-4 sm:gap-0 sm:px-0
          md:grid-cols-3 md:grid-rows-4
          lg:grid-cols-4 lg:grid-rows-3
        "
      >
        {images.slice(0, 12).map((src, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden
              h-[300px]
              sm:h-auto
            "
          >
            {/* Image */}
            <Image
              src={src}
              alt={`Project ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="
                object-cover
                scale-110
                transition-transform duration-1800 ease-in-out
                group-hover:scale-100
              "
            />

            {/* Frame / mask overlay */}
            <div
              className="
                pointer-events-none absolute inset-0
                backdrop-blur-[2px]
                bg-[rgba(29,41,61,0.45)]
                outline-1 outline-white/40
                `outline-offset-4px`
              "
              style={{
                WebkitMask:
                  "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize:
                  "100% 100%, calc(100% - 24px) calc(100% - 24px)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}