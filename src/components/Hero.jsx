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
      className="max-container mt-20 flex min-h-screen w-full flex-col-reverse items-center justify-between gap-10 px-4 py-10 md:flex-row lg:mt-0 xl:flex-row"
    >
      <div className=" relative flex w-full flex-col items-start justify-center md:pt-0 xl:w-3/5">
        <h1 className="font-palanquin mt- mt-3 text-6xl font-bold">
          Front-End Developer
        </h1>
        <h3 className="font-palanquin mt-3 text-3xl font-medium text-gray-600">
          UI / UX Designer
        </h3>
        <p className="font-montserrat text-coral-red text-md mt-3 leading-relaxed text-gray-500">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-slate-600">Prince Reyes</span>
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
