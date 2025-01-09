import Link from "next/link";
import { MapPinned, Phone, Mail, Minus } from "lucide-react";

// Types moved outside component
type QuickLink = {
  href: string;
  label: string;
};

type BranchAddress = {
  icon: React.ReactNode;
  text: string | string[];
};

type BusinessHours = {
  day: string;
  hour: string;
};

// Default data
const defaultQuickLinks: QuickLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const defaultBranchAddress: BranchAddress[] = [
  {
    icon: <MapPinned />,
    text: "Mussfah - M2 - Abu Dhabi - UAE",
  },
  {
    icon: <Mail />,
    text: "support@example.com",
  },
  {
    icon: <Phone />,
    text: ["+971504469514 - +971567770661"],
  },
];

const defaultBusinessHours: BusinessHours[] = [
  {
    day: "Sat - Thu",
    hour: "9:00 am - 10:00 pm",
  },
  {
    day: "Friday",
    hour: "4:30 pm - 9:00 pm",
  },
];

// Component definition
const Footer = () => {
  const quickLinks = defaultQuickLinks;
  const branchAddress = defaultBranchAddress;
  const businessHours = defaultBusinessHours;

  return (
    <div className="min-h-[90vh] w-full mt-24 bg-[#000] text-white">
      <div className="flex md:flex-row flex-col gap-7 justify-between h-full max-w-7xl lg:mx-auto mx-5 px-5 pt-10 pb-10 lg:pb-0">
        <div className="flex lg:flex-row flex-col md:w-[50%] lg:w-[60%] w-full gap-10">
          <div className="lg:w-[50%] w-full flex flex-col gap-5 ">
            <div className="">
              <img
                src="./images/logo.svg"
                alt="logo"
                className="lg:w-[200px] w-[100px] h-full object-cover   !relative"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl pb-3 text-primary">
                  Professional Auto Repair
                </h1>
                <p className="text-sm text-white ">
                  Your Trusted Mechanics, Every Mile Matters
                </p>
                <p className="text-sm text-white">
                  Fast. Affordable. Expert Care
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl pb-3 text-primary">Contact Info</h1>
                {branchAddress.map((cur, index) => (
                  <div key={index} className="flex gap-7">
                    <span className="text-secondary">{cur.icon}</span>
                    <p className="text-white">{cur.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full  flex flex-col gap-5 lg:mt-[200px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl pb-3 text-primary">Business Hours</h1>
              {businessHours.map((cur, index) => (
                <div key={index} className="flex gap-5">
                  <p className="text-secondary">{cur.day}</p>
                  <p className="text-white">{cur.hour}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl pb-3 text-primary">Quick Links</h1>
              {quickLinks.map((cur, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-secondary">
                    <Minus />
                  </span>
                  <Link
                    href={cur.href}
                    className="text-white text-base hover:text-primary"
                  >
                    {cur.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] md:w-[50%]  ">
          <div className="w-full h-full min-h-[500px]  flex justify-end overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.126806124474!2d54.51952692481602!3d24.37689177824818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e412a2e118431%3A0x56f4194db799e43c!2sNaseem%20Mussfah%20Auto%20Electric%20%26%20Air%20Conditioning%20Repair!5e0!3m2!1sar!2spl!4v1732427569731!5m2!1sar!2spl"
              className="w-full  border-0 rounded-md "
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
