import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-56 h-56 mt-28">
        <Image
          src="/me.jpg"
          alt="My Image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover rounded-full object-center"
        />
      </div>
      <div className="my-6">
        <TypeAnimation
          sequence={[
            "Front-End Web Developer 💻",
            2000,
            "UI/UX Designer ✨",
            1000,
          ]}
          wrapper="p"
          speed={50}
          className="text-2xl font-bold"
          repeat={Infinity}
        />
      </div>
      <div className="w-1/2">
        <p className="text-center text-sm">
          My name is Mohamed Yacine Ayachi. I am from Tunisia. I am a
          self-taught Front-End Web Developer. With over 4 years of experience
          in web development and building tools to help businesses grow. I also
          have some skills in UI/UX design.
        </p>
      </div>
      <Link href="#about">
        <ChevronDownIcon className="w-14 h-14 mt-[100px] animate-bounce" />
      </Link>
    </div>
  );
};

export default Hero;
