import hero from "../assets/images/hero.png";

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
      <div className="flex h-full flex-1 items-center justify-center">
        <img src={hero} alt="" className="h-full object-cover md:w-11/12" />
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal">
            <span className="text-5xl text-cyan-600 md:text-6xl">
              Hello!
              <br />
            </span>
            My Name is <span>Prince Reyes</span>
          </h1>
          <h4 className="mt-4 text-lg font-bold leading-5 text-gray-600 md:text-2xl md:leading-normal">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
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
