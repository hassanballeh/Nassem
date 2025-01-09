import Header from "@/components/Header";
import { Target, Globe, Eye, Award } from "lucide-react";

const defaultTitleAndSection = [
  {
    title: "Our Vision",
    icon: <Target className="w-12 h-12 text-secondary" />,
    text: "To be the leading provider of exceptional products and services, creating meaningful connections with our customers and contributing positively to the community through innovation, quality, and compassion.",
  },
  {
    title: "Our Mission",
    icon: <Eye className="w-12 h-12 text-secondary" />,
    text: "At Nassem Musafah, our mission is to deliver outstanding products and experiences that exceed customer expectations. We are committed to maintaining the highest standards of quality, integrity, and customer satisfaction while fostering a culture of continuous improvement and innovation.",
  },
  {
    title: "Our Values",
    icon: <Globe className="w-12 h-12 text-secondary" />,
    text: [
      {
        subTitle: "Integrity",
        text: "We conduct our business with honesty, transparency, and ethical principles.",
      },
      {
        subTitle: "Excellence",
        text: "We strive for the highest quality in everything we do, continuously improving.",
      },
      {
        subTitle: "Customer Focus",
        text: "We prioritize our customers' needs and aim to create exceptional experiences.",
      },
    ],
  },
];

const defaultAchievements = [
  {
    title: "Years in Business",
    num: "5+",
  },
  {
    title: "Successful Projects",
    num: "100+",
  },
  {
    title: "Happy Clients",
    num: "50+",
  },
];

export default function About() {
  const titleAndSection = defaultTitleAndSection;
  const achievements = defaultAchievements;

  return (
    <div className="">
      <Header />
      <div className="w-full mt-24">
        <div className="flex flex-col gap-24 max-w-4xl lg:mx-auto mx-5 px-5  lg:text-center text-left">
          <div className="flex flex-col items-start lg:items-center justify-start gap-3">
            <h1 className="text-4xl font-black text-primary">
              About Naseem Musafah
            </h1>
            <p className="text-xl text-[#797979] max-w-3xl lg:mx-auto ">
              We are passionate about creating innovative solutions that make a
              difference in people's lives.
            </p>
          </div>
          {titleAndSection.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex  lg:justify-center justify-start  items-start gap-4">
                <span>{section.icon}</span>
                <h2 className="text-3xl font-black text-primary">
                  {section.title}
                </h2>
              </div>
              <div className=" flex md:flex-row flex-col gap-4 justify-between">
                {Array.isArray(section.text) ? (
                  section.text.map((subSection, subIndex) => (
                    <div key={subIndex} className="flex flex-col gap-3">
                      <h3 className="text-xl text-secondary">
                        {subSection.subTitle}
                      </h3>
                      <p className="text-lg text-[#797979]">
                        {subSection.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div>
                    <p className="text-lg text-[#797979]">{section.text}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className=" flex flex-col gap-4 ">
            <h2 className="text-3xl font-black text-primary">
              Our Achievements
            </h2>
            <div className="flex md:flex-row justify-between items-center   flex-col ">
              {achievements.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <span className="text-secondary">
                    <Award className="w-12 h-12" />
                  </span>
                  <p className="text-xl text-primary font-bold">{item.num}</p>
                  <p className=" text-base text-[#797979]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
