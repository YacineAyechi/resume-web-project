import Image from "next/image";

const Skills = () => {
  const technicalSkills = [
    {
      name: "Frontend Development",
      items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Shadcn Ui"],
    },
    {
      name: "UI/UX",
      items: ["Tailwind CSS", "Responsive Design", "Figma"],
    },
    {
      name: "Tools & Others",
      items: ["Git", "Firebase", "REST APIs"],
    },
  ];

  return (
    <div
      id="skills"
      className="bg-blue-50 text-black flex flex-col items-center justify-center p-20 min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-2 relative">Skills</h2>
      <div className="w-28 h-1 bg-[#E04300] mb-10 rounded-full"></div>

      <div className="flex items-center justify-between gap-12 max-w-6xl">
        <div className="flex-1 space-y-8">
          {technicalSkills.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#E04300]">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative group">
            <Image
              src="/skills.svg"
              alt="Programming Skills Illustration"
              width={1920}
              height={1080}
              className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
