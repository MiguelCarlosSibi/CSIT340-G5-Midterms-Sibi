import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Contribute from "./components/Contribute";
import Footer from "./components/Footer";

function App() {
  const [stars, setStars] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [issues, setIssues] = useState(5);

  function handleStar() {
    setStars(stars + 1);
  }

  function handleDownload() {
    setDownloads(downloads + 1);
  }

  function handleReport() {
    setIssues(issues + 1);
  }

  function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <Navbar brand="Maroon UI" links={["Docs", "Components", "GitHub"]} version="v1.0" />

      <Hero
        title="Build pages faster."
        tagline="An open-source component kit for React."
        author="YOUR NAME"
      />

      <div className="flex justify-center gap-4 py-6">
        <button
          className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleStar}
        >
          Star
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleDownload}
        >
          Download
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleReport}
        >
          Report issue
        </button>
        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <Stats stars={stars} downloads={downloads} issues={issues} />

      <Features />

      <Contribute
        title="Contribute"
        description="Maroon UI grows with help from people like you."
        steps={["Fork the repo", "Make your change", "Open a pull request"]}
      />

      <Footer text="Maroon UI is free and open source." />
    </div>
  );
}

export default App;
