'use client'
import Image from "next/image";

const logos = [
  { src: "/logos/html.png", alt: "HTML" },
  { src: "/logos/css.png", alt: "CSS" },
  { src: "/logos/javascript.png", alt: "JavaScript" },
  { src: "/logos/typescript.png", alt: "TypeScript" },
  { src: "/logos/react.png", alt: "React" },
  { src: "/logos/php.png", alt: "PHP" },
  { src: "/logos/laravel.png", alt: "Laravel" },
  { src: "/logos/c-sharp.png", alt: "C#" },
  { src: "/logos/c-.png", alt: "C++" },
];

export default function Carrosel() {
  return (
    <div className="w-full overflow-hidden py-8 bg-transparent">
      <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
        {logos.map((logo) => (
          <div key={logo.alt} className="inline-block">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              className="mx-2 sm:mx-4 transition duration-300 w-12 h-12 sm:w-[80px] sm:h-[80px] min-w-12 min-h-12 sm:min-w-[80px] sm:min-h-[80px] max-w-none max-h-none"
            />
          </div>
        ))}
        {/* Repete para efeito infinito */}
        {logos.map((logo) => (
          <div key={logo.alt + "-2"} className="inline-block">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              className="mx-2 sm:mx-4 transition duration-300 w-12 h-12 sm:w-[80px] sm:h-[80px] min-w-12 min-h-12 sm:min-w-[80px] sm:min-h-[80px] max-w-none max-h-none"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll 14s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}