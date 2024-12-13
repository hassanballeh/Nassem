import Header from "@/components/Header";
import {
  Wrench,
  CheckCircle,
  Shield,
  Thermometer,
  Battery,
  Car,
  Zap,
  Cpu,
  CloudCog,
} from "lucide-react";
import { it } from "node:test";

export default function Services() {
  const serviceDetails = [
    {
      kilometers: 10000,
      icon: <Wrench className="w-8 h-8 md:w-12 md:h-12" />,
      title: "10K KM Basic Service",
      description:
        "Essential maintenance to ensure optimal vehicle performance and early problem detection.",
      services: [
        "Engine oil and filter replacement",
        "Brake system basic inspection",
        "Tire rotation and pressure check",
        "Battery health diagnostic",
      ],
    },
    {
      kilometers: 50000,
      icon: <CheckCircle className="w-8 h-8 md:w-12 md:h-12" />,
      title: "50K KM Intermediate Service",
      description:
        "Comprehensive mid-life vehicle maintenance focusing on critical system performance.",
      services: [
        "Complete 10K service items",
        "Transmission fluid assessment",
        "Suspension component check",
        "Comprehensive electrical system diagnostic",
        "Coolant system evaluation",
      ],
    },
    {
      kilometers: 100000,
      icon: <Shield className="w-8 h-8 md:w-12 md:h-12" />,
      title: "100K KM Major Overhaul",
      description:
        "Comprehensive full-system inspection and renewal to extend vehicle life and ensure peak performance.",
      services: [
        "All previous service levels included",
        "Comprehensive engine diagnostic",
        "Timing belt/chain thorough inspection",
        "Complete brake system evaluation",
        "Advanced electrical system check",
        "Air conditioning system full service",
      ],
    },
  ];

  const specialServices = [
    {
      icon: <Thermometer className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Air Conditioning System Diagnostics",
      description:
        "Comprehensive climate control system analysis and optimization. Our technicians perform in-depth evaluations of refrigerant levels, compressor functionality, and overall cooling performance using state-of-the-art diagnostic equipment.",
      details: [
        "Refrigerant pressure testing",
        "Compressor and condenser inspection",
        "Leak detection and repair",
        "Performance efficiency assessment",
      ],
    },
    {
      icon: <Car className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Mechanical System Repair",
      description:
        "Comprehensive mechanical restoration and maintenance service covering all critical vehicle systems. Our expert mechanics provide precision diagnostics and repairs to ensure optimal vehicle performance and longevity.",
      details: [
        "Engine system comprehensive check",
        "Transmission and drivetrain analysis",
        "Suspension and steering alignment",
        "Exhaust system evaluation",
      ],
    },
    {
      icon: <Battery className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Electrical System Evaluation",
      description:
        "Advanced electrical system diagnostics and repair service. We use cutting-edge technology to identify and resolve complex electrical issues, ensuring your vehicle's electronic systems operate at peak efficiency.",
      details: [
        "Battery health and charging system test",
        "Alternator and starter motor diagnostics",
        "Wiring harness inspection",
        "Electronic control unit (ECU) analysis",
      ],
    },
    {
      icon: <CheckCircle className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Comprehensive Vehicle Health Checks",
      description:
        "Holistic vehicle assessment providing a complete overview of your vehicle's condition. Our multi-point inspection identifies potential issues before they become major problems, saving you time and money.",
      details: [
        "Full vehicle system diagnostic",
        "Fluid level and quality check",
        "Wear and tear assessment",
        "Predictive maintenance recommendations",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Advanced Computer Diagnostics",
      description:
        "Cutting-edge computer diagnostic service utilizing the latest technology to analyze your vehicle's complex electronic systems. We provide precise problem identification and resolution for modern, computer-controlled vehicles.",
      details: [
        "Comprehensive error code scanning",
        "Software system updates",
        "Performance optimization",
        "Customized diagnostic reporting",
      ],
    },
  ];
  return (
    <div className="">
      <Header title="Our Services" />
      <div className="w-full mt-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2  items-start lg:items-center justify-start  max-w-4xl lg:mx-auto mx-5 px-5 ">
            <h1 className="md:text-4xl text-2xl font-black text-primary">
              Naseem Musafah Automotive Services
            </h1>
            <p className="md:text-xl text-base text-[#797979] ">
              Professional Vehicle Maintenance in Abu Dhabi
            </p>
          </div>
          <div className="flex lg:flex-row flex-col gap-7  max-w-6xl lg:mx-auto mx-5 px-5 ">
            {serviceDetails.map((service) => (
              <div
                key={service.kilometers}
                className=" flex flex-col gap-3 border-solid border-2 border-primary p-4 rounded-lg"
              >
                <div className="flex items-center justify-start gap-3">
                  <span className="text-secondary">{service.icon}</span>
                  <h2 className="text-primary md:text-2xl text-xl">
                    {service.title}
                  </h2>
                </div>
                <p className="text-[#797979] md:text-base text-sm">
                  {service.description}
                </p>

                <div>
                  <h3 className="text-secondary text-xl mb-4">
                    Services Include:
                  </h3>
                  <ul className="flex flex-col gap-6">
                    {service.services.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-3 items-center justify-start"
                      >
                        <span className="text-primary">
                          <CheckCircle />
                        </span>
                        <p className="text-[#797979] text-sm"> {item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mt-10">
            <h2 className="md:text-3xl text-2xl text-primary font-black mb-10 mx-5 px-5 lg:text-center text-left">
              Specialized Automotive Services
            </h2>
            <div className="flex flex-col gap-7 max-w-6xl lg:mx-auto mx-5 px-5 ">
              {specialServices.map((item, index) => (
                <div className="flex flex-col gap-3 border-solid border-separate border-primary p-4 rounded-lg shadow-xl bg- ">
                  <div className="flex items-center justify-start gap-3">
                    <span className="text-secondary ">{item.icon}</span>
                    <h3 className="text-primary md:text-2xl text-xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="md:text-xl text-base text-[#797979]">
                    {item.description}
                  </p>
                  <h3 className="text-secondary md:text-xl text-base">
                    Service Details:
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {item.details.map((cur, index) => (
                      <li
                        key={index}
                        className="md:text-base text-sm text-[#797979]"
                      >
                        {cur}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
