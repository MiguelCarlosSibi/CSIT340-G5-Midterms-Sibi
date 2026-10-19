import { useState } from "react";

function Contribute({ issues }) {
  const [contributors, setContributors] = useState(0);

  const openIssues = Math.max(0, issues - contributors);

  function handleContribute() {
    setContributors(contributors + 1);
  }

  function handleClear() {
    setContributors(0);
  }

  return (
    <section className="px-20 py-12">
      <div className="rounded-xl border border-[#800020] p-8 text-center">
        <h3 className="text-3xl font-bold">Contribute</h3>
        <p className="mt-3 text-xl text-[#000000]">
          Maroon UI grows with help from people like you.
        </p>
        <p className="mt-3 text-xl text-[#000000]">Contributors: {contributors}</p>
        <p className="mt-1 text-xl text-[#000000]">Open issues: {openIssues}</p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
            href="https://github.com/MiguelCarlosSibi/CSIT340-G5-Midterms-Sibi"
            target="_blank"
            rel="noreferrer"
            onClick={handleContribute}
          >
            GitHub
          </a>
          <button
            className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contribute;