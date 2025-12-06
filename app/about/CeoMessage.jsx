import Image from "next/image";
import ceo from "../../public/team/ceo.jpg";
export default function CeoMessage() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* CEO Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-xl">
            <Image
              src={ceo} // Change to your actual image path
              alt="CEO"
              fill
              className="object-cover"
              sizes="100%"
            />
          </div>
        </div>

        {/* CEO Message */}
        <div className="max-sm:px-4 max-sm:text-justify">
          <h2 className="text-3xl sm:text-4xl max-sm:text-center md:text-5xl font-extrabold text-gray-900 mb-6">
            A Message From Our CEO
          </h2>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
            At our company, we believe in building long-term relationships
            through trust, quality, and innovation. For more than a decade,
            we’ve been dedicated to helping businesses grow through exceptional
            service and unmatched craftsmanship.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
            Our success has always come from our commitment to excellence.
            Every project, no matter the scale, receives the highest level of
            attention and care. We continue to push boundaries and raise the
            standard for what’s possible.
          </p>

          <p className="text-gray-900 text-xl sm:text-2xl font-semibold">
            Fawad Shaheer Sulaimankhel
          </p>
        </div>
      </div>
    </section>
  );
}
