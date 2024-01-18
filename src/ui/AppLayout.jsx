import Hero from "../components/Hero";
import About from "../components/About";
// import Skills from "../components/Skills";
import Project from "../components/Project";
// import Hireme from "../components/Hireme";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Bot from "../components/Bot";
import Ux from "../components/Ux";

function AppLayout() {
  return (
    <main className="relative">
      <Navbar />
      {/* <Bot /> */}

      <Hero />

      <About />
      {/* <Skills /> */}
      {/* <Hireme /> */}
      <Ux />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default AppLayout;
