function Skills() {
  const skills = [
    {
      logo: "logo-html5",
    },
    {
      logo: "logo-css3",
    },
    {
      logo: "logo-nodejs",
    },
    {
      logo: "logo-react",
    },
    {
      logo: "logo-python",
    },
    {
      logo: "logo-vercel",
    },
    {
      logo: "logo-figma",
    },
    {
      logo: "logo-firebase",
    },
  ];
  return (
    <section id="skills" className="relative bg-slate-800 py-10">
      <div className="mt-8 text-center text-gray-100">
        <h3 className="text-4xl font-semibold">
          My <span className="text-slate-400">Skills</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My knowledge</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group relative rounded-xl border-2 border-cyan-600 bg-gray-900 p-4"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full">
                <div className="h-18 w-18 flex items-center justify-center rounded-full bg-gray-900 text-6xl group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
