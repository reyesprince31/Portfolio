import aboutImg from "../assets/images/about.png";

function About() {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                eos, quam vel quisquam, explicabo sit labore dignissimos optio
                ratione quibusdam doloribus pariatur consequuntur sint.
                Reprehenderit cupiditate possimus facere quasi voluptatem?
              </p>
              <div className="mt-10 flex items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="text-2xl font-semibold text-white md:text-4xl">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="text-xs md:text-base">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-1 items-center justify-center md:mt-0">
            <div className="aboutImg relative h-full w-11/12 max-w-sm sm:w-10/12 lg:w-96 ">
              <img
                src={aboutImg}
                alt=""
                className="w-full rounded-xl bg-cyan-600 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
