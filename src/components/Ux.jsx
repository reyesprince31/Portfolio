import { TbAlertTriangle, TbTargetArrow } from "react-icons/tb";

function Ux() {
  return (
    <>
      <section id="ux" className="flex w-full  text-white sm:p-12">
        <div className="max-container px-4 py-4">
          <div className="text-center">
            <h3 className="text-4xl font-semibold text-slate-900">
              <span className="font-bold">UX</span> Portfolio
            </h3>
          </div>

          <div className="">
            <div className="mt-8 rounded-lg bg-slate-900 p-2 md:p-8">
              <div className="lg:flex lg:items-center lg:gap-4">
                <div className="mx-auto mt-4 w-10/12">
                  <img
                    src="assets/images/Mockup.png"
                    alt="mockup"
                    className="rounded-lg"
                  />
                  <p className="mt-4 text-center text-gray-400">
                    Mobile Mockup
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-6 lg:mt-0">
                  <div>
                    <h2 className="text:xl text-center font-bold sm:text-start sm:text-3xl">
                      Design an appointment calendar app for an OB-Gyn Clinic
                    </h2>
                    <p className="text-md mt-4 rounded-lg bg-slate-800 px-4 py-2 text-gray-200">
                      The appointment calendar app designed for an OB-Gyn clinic
                      is aimed at pregnant or soon-to-be pregnant users who need
                      an easy and efficient way to schedule and manage their
                      medical appointments. The app will offer features such as
                      appointment reminders, health tracking, and access to
                      medical information, all in a user-friendly and intuitive
                      design.
                    </p>
                  </div>
                  <div className="space-y-4 lg:flex lg:gap-4 lg:space-y-0">
                    <div className="flex items-center gap-4 rounded-lg bg-red-400 px-4 py-2">
                      <span className=" text-3xl">
                        <TbAlertTriangle />
                      </span>

                      <div className="border-l-[.75px] border-l-slate-300 pl-4">
                        <span className="text-xl font-semibold">
                          The problem:
                        </span>
                        <p className="text-md text-gray-800">
                          To make it easier and more convenient for pregnant or
                          soon-to-be pregnant users to schedule and manage their
                          medical appointments.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg bg-green-500 px-4 py-2">
                      <span className=" text-3xl">
                        <TbTargetArrow />
                      </span>
                      <div className="border-l-[.75px] border-l-slate-300 pl-4">
                        <span className="text-xl font-semibold">The goal:</span>
                        <p className="text-md text-gray-600">
                          To create an appointment calendar app that would
                          reduce waiting and queuing times for customers seeking
                          medical appointments at the OB-Gyn clinic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-800 px-4 py-2">
                    <span className="text-xl font-semibold">
                      Summary of User research:
                    </span>
                    <p className="text-md mt-2 leading-normal text-gray-300">
                      For my user research, we conducted interviews and surveys
                      to understand the needs and preferences of potential users
                      for an appointment calendar app for an OB-Gyn clinic.
                      Before conducting research, I assumed that users would
                      prioritize features such as appointment reminders and easy
                      scheduling. However, after conducting research, I
                      discovered that users also wanted features for tracking
                      their health and accessing medical information. This
                      insight helped shape the design of the app and ensure that
                      it meets users needs and preferences.
                    </p>
                  </div>
                  <p className="text-right text-xs text-gray-400">
                    ( Unfinished Project )
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-slate-900 p-8">
            <p>Upcomming UX Projects..</p>
          </div>
        </div>
      </section>
      <section className="max-container mt-4 p-4">
        <h2 className="text-center text-3xl font-bold">
          Mockups, Wireframes, Prototypes
        </h2>
        <div className="mt-8 rounded-lg bg-slate-800 p-2">
          <h3 className="my-4 text-2xl text-gray-300">
            Design an appointment calendar app for an OB-Gyn Clinic
          </h3>
          <div className="grid-flow-row-dense grid-cols-4 items-center gap-4 space-y-4  md:grid">
            <div className="col-span-2 row-span-2 ">
              <img
                src="assets/images/ux-1.png"
                className=" transition duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="col-span-2">
              <img
                src="assets/images/ux-2.png"
                className="transition duration-300 ease-in-out hover:scale-150"
              />
            </div>
            <div className="">
              <img
                src="assets/images/ux-3.png"
                className="transition duration-300 ease-in-out hover:scale-150"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src="assets/images/ux-4.png"
                className="transition duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="col-span-2">
              <img
                src="assets/images/ux-5.png"
                className="transition duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="">
              <img
                src="assets/images/ux-6.png"
                className="transition duration-300 ease-in-out hover:scale-150"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-8 h-80 bg-slate-800 p-4 text-gray-200 md:h-40">
        <div className="text-center">
          <h1 className="text-3xl font-bold">UI/UX Project Links</h1>
          <div className="text-gray-40 mt-8 flex flex-col gap-8 text-xl font-bold md:flex-row md:items-baseline md:justify-center md:gap-40">
            <a href="https://docs.google.com/presentation/d/1SYSB3tlqzokUlG18N_h3yz5YUWX60ND3BNL7wb1DCUk/edit?usp=sharing">
              Case Study
            </a>
            <a href="https://docs.google.com/presentation/d/1VaI7WoNvSbqDA_T5HyByKEAYn7ZMulKk7oeENWynxcM/edit?usp=sharing">
              Usability Study
            </a>
            <a href="https://www.figma.com/file/pfwqJbQMy0OjIzuGe9Ars2/Calendar-Appointment-for-OB-Gyn-Clinic?type=design&node-id=27%3A13&mode=design&t=w1fSkURXiirULiqE-1">
              Figma Wireframe & Prototypes
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ux;
