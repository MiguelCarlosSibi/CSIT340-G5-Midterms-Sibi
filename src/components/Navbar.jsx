function Navbar({ brand, links, version }) {
  return (
    <nav className="flex items-center justify-between bg-[#800020] px-20 py-6 text-[#FFF9F2]">
      <h1 className="text-3xl font-bold">{brand}</h1>
      <ul className="flex gap-10 text-xl">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
      <p className="rounded-full bg-[#D45060] px-5 py-2 text-lg font-bold">{version}</p>
    </nav>
  );
}

export default Navbar;
