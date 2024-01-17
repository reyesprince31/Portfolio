function Contact() {
  const contact_info = [
    { logo: "mail", text: "reyes.prince31@gmail.com" },
    { logo: "logo-whatsapp", text: "+63 976 118 8483" },
    {
      logo: "location",
      text: "Fairview, Quezon City",
    },
  ];
  return (
    <section id="contact" className="px-3 py-10">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">Contact Me</h3>
        <p className="mt-3 text-lg text-gray-400">Get in touch</p>

        <div
          className="mx-auto mt-16 flex max-w-5xl
         flex-col gap-6 rounded-lg bg-gray-800 p-2 text-white md:flex-row md:p-6"
        >
          <form className="flex flex-1 flex-col gap-5">
            <input
              className="rounded-lg p-2 "
              type="text"
              placeholder="Your Name"
            />
            <input
              className="rounded-lg p-2"
              type="Email"
              placeholder="Your Email Address"
            />
            <textarea
              className="rounded-lg p-2"
              placeholder="Your Message"
              rows={10}
            ></textarea>
            <button className="w-fit rounded-lg bg-slate-600 px-4 py-3 hover:bg-slate-900">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  flex-wrap items-center gap-4 text-left"
              >
                <div className="flex  min-h-[3.5rem] min-w-[3.5rem] items-center justify-center rounded-full bg-cyan-600 text-3xl text-white">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="break-words text-sm  md:text-base">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
