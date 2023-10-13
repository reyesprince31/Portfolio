import hireMe from "../assets/images/hireMe.png";

function Hireme() {
  return (
    <section id="hireme" className="px-3 py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">Do you have any work?</p>
      </div>
      <div className="relative mx-auto mt-24 flex min-h-[24rem] flex-col-reverse items-center gap-6 rounded-2xl bg-gray-700 px-8 py-5 lg:max-w-4xl lg:flex-row">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="mt-4 max-w-lg text-justify text-sm leading-6 text-gray-200 lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            soluta quos tempore eos accusamus cupiditate, amet in similique
            sapiente obcaecati odio deleniti architecto corporis ratione.
            Consequatur a quidem maiores!
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="-right-3 bottom-0 h-80 object-cover lg:absolute lg:h-[32rem]"
        />
      </div>
    </section>
  );
}

export default Hireme;
