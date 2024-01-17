import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import MobileMenuButton from "./MobileMenuButton";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const navLinks = (
    <div className={`sm:flex ${!sticky && "text-white"}`}>
      <NavLink sticky={sticky} text="home" />
      <NavLink sticky={sticky} text="ux" />
      {/* <NavLink sticky={sticky} text="skills" /> */}
      <NavLink sticky={sticky} text="react.js" />
      <NavLink sticky={sticky} text="contact" />
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-gray-900  ${
        sticky && "bg-white/50"
      }`}
    >
      <div className="max-container px-4 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between  ">
          <div>
            <img
              className="h-8"
              src={
                sticky
                  ? "assets/images/tNAsset 4.png"
                  : "assets/images/tNAsset 5.png"
              }
              alt="Workcation"
            />
          </div>
          <div className="sm:hidden">
            <MobileMenuButton
              sticky={sticky}
              toOpen={isOpen}
              toggleMenu={toggleMenu}
            />
          </div>
        </div>
        <nav className={`sm:block ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pb-4 pt-2 sm:flex sm:p-0">{navLinks}</div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
