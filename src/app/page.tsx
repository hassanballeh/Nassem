import TestimonialsSlider from "@/components/Testimonials";
import Hero from "../components/Hero";
import { Minus, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Features = {
  text: string;
};

const defaultFeatures1: Features[] = [
  { text: "Highly Professional Staff" },
  { text: "100% Satisfaction Guarantee" },
  { text: "Quality Control System" },
  { text: "Price match promise" },
  { text: "Safety recommendations" },
];

const defaultFeatures2: Features[] = [
  { text: "Accourate Testing Process" },
  { text: "Unrivalle Workmanship" },
  { text: "Timely Delivery" },
  { text: "Follow-up service calls" },
  { text: "Strong community reputation" },
];

export default function Home() {
  const features1 = defaultFeatures1;
  const features2 = defaultFeatures2;

  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <div className="max-w-7xl lg:mx-auto mx-5 px-5  flex lg:flex-row flex-col gap-20">
        <div className="lg:block hidden">
          <Image
            className="lg:w-[700px]"
            src="/images/technical-repairs-400x320.webp"
            alt="technical-repairs"
            width={700}
            height={320}
            priority
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-1 text-secondary text-2xl items-center">
            <Minus />
            <span className="font-semibold text-secondary">
              Welcome to Our workshop
            </span>
          </div>
          <h1 className="text-primary text-4xl font-black">
            Committed to Give High Quality Repairing & Services
          </h1>
          <p className="mb-5 text-gray-600 text-base">
            Beat the Abu Dhabi heat with our professional AC maintenance and
            repair services. Our certified technicians ensure your vehicle's
            cooling system performs at its best when you need it most.
          </p>
          <p className="text-gray-600 text-base">
            Trust our experienced mechanics to keep your vehicle running
            smoothly. We combine technical expertise with state-of-the-art
            equipment to deliver superior mechanical repairs.
          </p>
          <Link
            href="/services"
            className="relative w-[200px] text-center text-secondary border-2 border-primary rounded px-4 py-2 inline cursor-pointer text-base font-bold before:bg-primary hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0 before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            View All Services
          </Link>
        </div>
      </div>
      <div className="max-w-7xl lg:mx-auto mx-5 px-5">
        <h1 className="text-primary text-4xl font-black mb-10 md:text-center text-left">
          Why Choose Us
        </h1>
        <div className="flex md:flex-row flex-col md:gap-40 gap-10">
          <ul className="flex flex-col gap-10">
            {features1.map((cur, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-secondary">
                  <CircleCheckBig />
                </span>
                <p className="text-xl text-gray-600">{cur.text}</p>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-10">
            {features2.map((cur, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-secondary">
                  <CircleCheckBig />
                </span>
                <p className="text-xl text-gray-600">{cur.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl lg:mx-auto mx-5 px-5">
        <h1 className="text-primary text-4xl font-black mb-10 md:text-center text-left">
          Testimonials
        </h1>
        <TestimonialsSlider />
      </div>
    </div>
  );
}
