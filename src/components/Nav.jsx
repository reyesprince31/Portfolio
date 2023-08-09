import reactLogo from "../assets/react.svg";
import Links from "./Links";

function Nav() {
  return (
    <nav className="sticky flex top-0 w-full bg-gradient-to-r from-slate-900 to-stone-900 ">
      <div className="flex items-center p-3 font-bold gap-2 ">
        <img src={reactLogo} alt="hew" />
        <div className="cursor-pointer hover:underline">
          <span className="text-cyan-500">P</span>rince
          <span className="text-cyan-500 ml-2">R</span>eyes
        </div>
      </div>

      <div className="flex flex-1 justify-end">
        <Links item="Home" />
        <Links item="About" />
        <Links item="Services" />
        <Links item="Portfolio" />
        <Links item="Contact" />
      </div>
    </nav>
  );
}

export default Nav;
