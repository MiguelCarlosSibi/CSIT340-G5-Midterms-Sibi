function Intro({ tagline, author }) {
  return (
    <>
      <p className="mt-5 text-2xl text-[#000000]">{tagline}</p>
      <p className="mt-2 text-xl text-[#000000]">Made by {author}</p>
    </>
  );
}

export default Intro;