import Intro from "./Intro";

function Hero({ title, tagline, author }) {
  return (
    <header className="px-20 pt-8 text-center">
      <h2 className="text-7xl font-bold">{title}</h2>
      <Intro tagline={tagline} author={author} />
    </header>
  );
}

export default Hero;