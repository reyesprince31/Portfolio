import { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-[999] w-full  ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <div className="ml-7">
            <h4 className="text-4xl font-bold uppercase">
              <span className="text-cyan-600">P</span>rince
            </h4>
          </div>

          <div className="mr-7">
            <ul className="flex items-center gap-8 py-2 text-lg">
              {menuLinks?.map((menu, i) => (
                <li key={i} className=" hover:text-cyan-600">
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpen(true)}
        className="open absolute right-7 top-7 block w-8 cursor-pointer md:hidden"
      >
        <div className="my-2 h-[1px] w-full rounded-r-3xl bg-[#D9D9D9]"></div>
        <div className="my-2 h-[1px] w-full rounded-r-3xl bg-[#D9D9D9]"></div>
        <div className="my-2 h-[1px] w-full rounded-r-3xl bg-[#D9D9D9]"></div>
      </div>
    </nav>
  );
}

export default Navbar;
