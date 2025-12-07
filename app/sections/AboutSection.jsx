import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-24 md:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-12">
        {/* Left Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
          <Image
            src="/homepage/img_1.jpg"
            alt="A professional looking man sitting with a laptop"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="mt-10 md:mt-0">
          <h1 className="text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-extrabold leading-none mb-5!">
            Leading Printing Press in Kabul, Afghanistan
          </h1>

          <p className="text-gray-600 mb-4 text-base sm:text-lg! lg:text-xl! leading-none! max-sm:leading-tight!">
            Strengths Innovation is one of the best printing services in
            Afghanistan, registered with the Afghan Investment Support Agency
            (AISA) since 2002. With over 14 years of dedication and professional
            excellence, we have become the most trusted name in commercial
            printing across Kabul and beyond.
          </p>

          <p className="text-gray-600 mb-4 text-base sm:text-lg! lg:text-xl! leading-none! max-sm:leading-tight!">
            Our state-of-the-art printing facility offers comprehensive
            solutions for all your printing needs—from corporate branding
            materials to large-scale commercial projects. We combine
            cutting-edge technology with skilled craftsmanship to deliver
            international quality standards at competitive prices.
          </p>

          {/* Feature List */}
          <div className="space-y-4">
            <FeatureItem
              text="Top Quality Prints Using The Latest Technology"
              color="text-purple-600"
            />
            <FeatureItem
              text="Mix And Match Colors, Sizes, And Designs"
              color="text-purple-600"
            />
            <FeatureItem
              text="Fast And Free Standard Shipping"
              color="text-purple-600"
            />
            <FeatureItem
              text="Customer Happiness Guarantee"
              color="text-purple-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ text, color }) => (
  <div className="flex items-start">
    <div className={`p-1 ${color} rounded-full mt-[3px]`}>
      <Check className="w-5 h-5" />
    </div>
    <span
      className={`ml-3 text-lg sm:text-xl lg:text-2xl font-semibold ${color}`}
    >
      {text}
    </span>
  </div>
);
