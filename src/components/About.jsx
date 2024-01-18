// import aboutImg from "../assets/images/about.png";

function About() {
  return (
    <section id="about" className="bg-about-bg py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-slate-500">Prince</span>
        </h3>
        <div className="mx-auto mt-4 flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:gap-6 ">
          <img
            src="assets/images/hero1.png"
            alt="image"
            className="mx-auto w-[300px] rounded-lg"
          />
          <div className="rounded-lg bg-slate-900 p-2 md:flex md:items-center md:justify-center">
            <div className="my-3">
              <p className="mx-auto w-11/12 text-justify leading-7">
                <p className="font-montserrat text-coral-red text-md mt-3 leading-relaxed text-gray-200">
                  Prince is a seasoned Front End Developer with extensive
                  experience, skillfully merging the entrepreneurial mindset of
                  a business owner with a strong tech background. Highly
                  proficient in developing user-friendly web applications using
                  React.js, Next.js, and Node.js. Demonstrates expertise in API
                  integration to elevate functionality and employs TailwindCSS
                  for creating visually appealing and responsive designs.
                </p>
                <p className="font-montserrat text-coral-red text-md mt-4 leading-relaxed text-gray-200">
                  Prince possesses a keen eye for design, coupled with
                  proficiency in Figma and Adobe Illustrator, complementing a
                  solid foundation in UI/UX principles. Enthusiastic about
                  collaborative efforts and eager to contribute to the creation
                  of exceptional web applications, pixel by pixel!
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
