import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="bg-blue-50 text-black flex flex-col items-center justify-center px-4 md:px-20 py-20 min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-2 relative">About Me</h2>
      <div className="w-28 h-1 bg-[#E04300] mb-10 rounded-full"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold text-[#E04300]">
            Hello, I am Yacine Ayachi!
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate self-taught front-end developer hailing from
            Tunis, Tunisia. With over 4 years of experience, I specialize in
            crafting responsive websites from scratch, transforming creative
            visions into sleek, user-friendly web experiences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I take pride in helping diverse clients establish their online
            presence, leveraging the latest technologies and frameworks to
            deliver modern, innovative solutions. Continuously learning and
            adapting to new trends drives my commitment to creating impactful
            digital experiences.
          </p>
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative group">
            <Image
              src="/me.jpg"
              alt="Yacine Ayachi"
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

export default AboutMe;
