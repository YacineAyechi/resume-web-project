import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-20">
      <h2 className="font-bold text-2xl">
        Yacine Ayachi<span className="text-[#E04300]">.</span>
      </h2>
      <div className="flex gap-8 font-bold">
        <Link
          href="#home"
          className="transition-all hover:text-[#E04300] hover:bg-white rounded-md px-3 py-1"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="transition-all hover:text-[#E04300] hover:bg-white rounded-md px-3 py-1"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="transition-all hover:text-[#E04300] hover:bg-white rounded-md px-3 py-1"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="transition-all hover:text-[#E04300] hover:bg-white rounded-md px-3 py-1"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="transition-all hover:text-[#E04300] hover:bg-white rounded-md px-3 py-1"
        >
          Contact
        </Link>
      </div>
      <Link
        href="/cv.pdf"
        target="_blank"
        className="bg-[#E04300] text-white px-4 py-2 rounded-md transition-all hover:bg-[#E04300] text- font-bold"
      >
        Download CV
      </Link>
    </div>
  );
};

export default Navbar;
