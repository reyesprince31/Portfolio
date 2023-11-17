import aboutImg from "../assets/images/about.png";

function About() {
  return (
    <section id="about" className="py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="my-3 text-lg text-gray-400">My introduction</p>
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-10 md:flex-row md:gap-6">
          <div className="p-2">
            <div className="my-3 text-gray-300">
              <p className="mx-auto w-11/12 text-justify leading-7">
                I am a dedicated Fullstack developer with a primary focus on the
                MERN stack (MongoDB, Express, React, Node). However, I am always
                eager to broaden my horizons and explore various technology
                stacks once I have established a strong foundation in order to
                craft sophisticated web applications in the future. My journey
                in the realm of web development has equipped me with a versatile
                skill set and a steadfast dedication to crafting outstanding
                user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
