import {
  TbBrandFigma,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReact,
  TbBrandSupabase,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

function Hero() {
  const social_media = [
    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/reyesprince/" },
    { icon: "logo-github", link: "https://github.com/reyesprince31" },
  ];
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col items-center justify-between gap-10 px-4 py-10 md:flex-row xl:flex-row"
    >
      <div className=" relative flex w-full flex-col items-start justify-center pt-28 md:pt-0 xl:w-3/5">
        <h1 className="font-palanquin mt- mt-3 text-6xl font-bold">
          Front-End Developer
        </h1>
        <h3 className="font-palanquin mt-3 text-3xl font-medium text-gray-600">
          UI / UX Designer
        </h3>
        <p className="font-montserrat text-coral-red text-md mt-3 leading-relaxed text-gray-500">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-slate-600">Prince Reyes</span>,
          Driven Front End Developer with years of experience, seamlessly
          blending the entrepreneurial spirit of a business owner with tech
          expertise. Proficient in crafting user-friendly web applications using
          React.js, Next.js, and Node.js.
        </p>
        <p className="font-montserrat text-coral-red text-md mt-3 leading-relaxed text-gray-500">
          Adept at API integration to enhance functionality. Utilizes
          TailwindCSS to create visually appealing and responsive designs.
          Demonstrates a keen eye for design with proficiency in Figma and Adobe
          Illustrator, complementing a solid foundation in UI/UX principles.
          Excited to collaborate and contribute to building exceptional web
          applications, pixel by pixel!
        </p>
        <div className="mt-8 flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className=" flex items-center gap-5 text-3xl sm:justify-center md:justify-start">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="cursor-pointer text-slate-900 hover:text-slate-600 "
              >
                <a href={icon.link}>
                  <ion-icon name={icon.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center">
            <h3 className="mt-5 font-semibold lg:mt-0">Tech Stack</h3>
            <span className="hidden font-bold lg:block">|</span>
            <div className="flex gap-4 text-xl">
              <TbBrandReact />
              <TbBrandNodejs />
              <TbBrandTypescript />
              <TbBrandTailwind />
              <TbBrandPython />
              <TbBrandFigma />
              <TbBrandSupabase />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center ">
        <img
          src="assets/images/avatar.jpg"
          alt="avatar"
          width={500}
          height={500}
          className="relative z-10 object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
