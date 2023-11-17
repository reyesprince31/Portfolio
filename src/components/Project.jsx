// import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
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
      live_link: "#",
    },
    {
      img: project2,
      name: "Books Mern",
      github_link: "https://github.com/reyesprince31/books_mern",
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
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My awesome works</p>
      </div>
      <br />
      <div className="relative mx-auto flex max-w-6xl items-center gap-6 px-5">
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {projects.map((project_info, i) => (
            <div key={i}>
              <div className="h-fit w-96 rounded-xl bg-slate-700 p-4">
                <img src={project_info.img} alt="" className="rounded-lg" />
                <h3 className="my-4 text-xl">{project_info.name}</h3>
                <div className="flex gap-3">
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gray-800 px-2 py-1 text-cyan-600"
                  >
                    Github
                  </a>
                  <a
                    href={project_info.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gray-800 px-2 py-1 text-cyan-600"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
