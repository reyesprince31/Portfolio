function Skills() {
  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
    },
    {
      logo: "logo-css3",
      level: "Advance",
    },
    {
      logo: "logo-nodejs",
      level: "Advance",
    },
    {
      logo: "logo-react",
      level: "Intermediate",
    },
    {
      logo: "logo-html5",
      level: "Advance",
    },
    {
      logo: "logo-css3",
      level: "Advance",
    },
    {
      logo: "logo-nodejs",
      level: "Advance",
    },
    {
      logo: "logo-react",
      level: "Intermediate",
    },
  ];
  return (
    <section id="skills" className="relative bg-gray-800 py-10">
      <div className="mt-8 text-center text-gray-100">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My knowledge</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group relative rounded-xl border-2 border-cyan-600 bg-gray-900 p-4"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-full">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-900 text-6xl group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="mt-3 text-xl">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
