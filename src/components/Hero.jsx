function Hero() {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center py-10 md:flex-row"
    >
      <div className="flex h-full flex-1 flex-col pr-7 text-right ">
        <div className="hidden xl:block">
          <div className="mt-4 flex h-20 w-full items-center rounded-md  ">
            <div className="text-5xl font-semibold text-slate-500">
              <h4 className="mt-4 text-lg font-bold leading-5 text-gray-600 md:text-[150px] md:leading-none">
                Fullstack Developer
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mt-8 text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal">
            <span className="text-5xl text-cyan-600 md:text-6xl">
              Hello!
              <br />
            </span>
            My Name is <span>Prince Reyes</span>
          </h1>

          <p className="mt-4 w-11/12 text-justify leading-7 text-gray-400">
            I am a dedicated Fullstack developer with a primary focus on the
            MERN stack (MongoDB, Express, React, Node). However, I am always
            eager to broaden my horizons and explore various technology stacks
            once I have established a strong foundation in order to craft
            sophisticated web applications in the future. My journey in the
            realm of web development has equipped me with a versatile skill set
            and a steadfast dedication to crafting outstanding user experiences.
          </p>

          <div className="mt-8 flex items-center justify-center gap-5 text-3xl md:justify-start">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="cursor-pointer text-gray-600 hover:text-white "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
