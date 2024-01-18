// import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";

import "swiper/css";
import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "The Wild Oasis",
      github_link: "https://github.com/reyesprince31/the-wild-oasis",
      live_link: "https://the-wildoasis-beta.netlify.app/",
    },
    {
      img: project2,
      name: "ATVS Warship Ecommerce",
      github_link: "https://github.com/reyesprince31/atvs_supabase_ecom",
      live_link: "#",
    },
    {
      img: project3,
      name: "Fast React Pizza Co.",
      github_link: "https://github.com/reyesprince31/Pizza-React-App",
      live_link: "https://mypizza-reactjs.netlify.app",
    },
    {
      img: project4,
      name: "Nike Landing Page Clone",
      github_link: "https://github.com/reyesprince31/Nike-tailwind-react",
      live_link: "nike-tailwind-react-2jzvqxdf4-reyesprince31.vercel.app",
    },
    {
      img: project5,
      name: "Position Size Calculator",
      github_link: "https://github.com/reyesprince31/Position-Size-Calculator",
      live_link: "https://positionsize-calculator.netlify.app",
    },
  ];
  return (
    <section id="react.js" className="max-container py-10 text-white ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-gray-900">
          React.Js Project
        </h3>
        <p className="mt-3 text-lg text-gray-400">My awesome works</p>
      </div>
      <br />

      <div className="flex w-full flex-wrap justify-center gap-4 ">
        {projects.map((project_info, i) => (
          <div
            key={i}
            className="mt-6 w-[350px] overflow-hidden rounded-lg bg-slate-700 shadow-lg shadow-slate-900 transition ease-in-out hover:z-40 hover:scale-125 hover:shadow-2xl"
          >
            <div className="relative pb-2/3">
              <img
                src={project_info.img}
                className="absolute h-full w-full object-cover blur-lg"
              />
              <img
                src={project_info.img}
                className="absolute h-full w-full border-b-2 border-gray-700 object-contain shadow-xl"
              />
            </div>
            <div className="px-6 pb-6">
              <h3 className="mt-1 truncate text-lg font-semibold leading-tight">
                <span className="my-4 text-xl">{project_info.name}</span>
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href={project_info.github_link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-lg bg-gray-800 px-2 py-1 text-cyan-600"
                >
                  Github
                </a>
                <a
                  href={project_info.live_link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-lg bg-gray-800 px-2 py-1 text-cyan-600"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
        {projects.map((project_info, i) => (
          <div
            key={i}
            className="flex w-8/12 flex-col overflow-hidden rounded-lg bg-slate-700 "
          >
            <div className="pb-2/6 relative">
              <img
                src={project_info.img}
                alt=""
                className="absolute h-96 w-full object-cover object-top"
              />
            </div>

         
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Project;
