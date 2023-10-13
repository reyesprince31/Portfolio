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
    <section id="contact" className="px-3 py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">Get in touch</p>

        <div
          className="mx-auto mt-16 flex max-w-5xl
         flex-col gap-6 rounded-lg bg-gray-800 p-2 md:flex-row md:p-6"
        >
          <form className="flex flex-1 flex-col gap-5">
            <input className="px-2" type="text" placeholder="Your Name" />
            <input
              className="px-2"
              type="Email"
              placeholder="Your Email Address"
            />
            <textarea
              className="px-2"
              placeholder="Your Message"
              rows={10}
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
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
