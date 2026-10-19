import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contribute from "./components/Contribute";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <Navbar />
      <Hero />
      <Features />
      <Contribute
        title="Contribute"
        description="Maroon UI grows with help from people like you."
        steps={["Fork the repo", "Make your change", "Open a pull request"]}
      />
      <Footer />
    </div>
  );
}

export default App;
