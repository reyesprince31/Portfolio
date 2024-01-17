function Ux() {
  return (
    <>
      <section id="ux" className="flex w-full bg-slate-800 text-white sm:p-12">
        <div className="max-container px-4 py-4">
          <div className="text-center">
            <h3 className="text-4xl font-semibold">
              <span className="font-bold text-slate-400">UX</span> Portfolio
            </h3>
          </div>

          <div>
            <div className="mt-8 rounded-lg bg-slate-900 p-2">
              <p className="text-sm text-gray-400">( Unfinished Project )</p>
              <h2 className="text-3xl font-bold">
                Design an appointment calendar app for an OB-Gyn Clinic
              </h2>
              <p className="mt-4 text-sm text-gray-400">
                The appointment calendar app designed for an OB-Gyn clinic is
                aimed at pregnant or soon-to-be pregnant users who need an easy
                and efficient way to schedule and manage their medical
                appointments. The app will offer features such as appointment
                reminders, health tracking, and access to medical information,
                all in a user-friendly and intuitive design.
              </p>
              <div className="mt-8 space-y-6 sm:flex sm:gap-20 sm:space-y-0">
                <div>
                  <span className="text-xl font-semibold">The problem:</span>
                  <p className="text-md text-gray-400">
                    To make it easier and more convenient for pregnant or
                    soon-to-be pregnant users to schedule and manage their
                    medical appointments.
                  </p>
                </div>
                <div>
                  <span className="text-xl font-semibold">The goal:</span>
                  <p className="text-md text-gray-400">
                    To create an appointment calendar app that would reduce
                    waiting and queuing times for customers seeking medical
                    appointments at the OB-Gyn clinic.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-xl font-semibold">
                  Summary of User research:
                </span>
                <p className="text-md text-gray-400">
                  For my user research, we conducted interviews and surveys to
                  understand the needs and preferences of potential users for an
                  appointment calendar app for an OB-Gyn clinic. Before
                  conducting research, I assumed that users would prioritize
                  features such as appointment reminders and easy scheduling.
                  However, after conducting research, I discovered that users
                  also wanted features for tracking their health and accessing
                  medical information. This insight helped shape the design of
                  the app and ensure that it meets users' needs and preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-slate-900 p-8">
            <p>Upcomming UX Projects..</p>
          </div>
        </div>
      </section>
      <section className="max-container mt-12 p-4">
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
                src="/src/assets/images/ux-1.png"
                className=" transition duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="col-span-2">
              <img
                src="/src/assets/images/ux-2.png"
                className="transition duration-300 ease-in-out hover:scale-150"
              />
            </div>
            <div className="">
              <img
                src="/src/assets/images/ux-3.png"
                className="transition duration-300 ease-in-out hover:scale-150"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src="/src/assets/images/ux-4.png"
                className="transition duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="col-span-2">
              <img
                src="/src/assets/images/ux-5.png"
                className="transition duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="">
              <img
                src="/src/assets/images/ux-6.png"
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
