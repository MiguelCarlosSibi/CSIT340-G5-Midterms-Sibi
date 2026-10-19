function Contribute({ title, description, steps }) {
  return (
    <section className="px-20 py-12">
      <div className="rounded-xl border border-[#800020] p-8 text-center">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="mt-3 text-xl text-[#000000]">{description}</p>
        <ol className="mt-6 flex justify-center gap-6 text-lg">
          {steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#800020] font-bold text-[#FFF9F2]">
                {index + 1}
              </span>
              <span className="text-[#000000]">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Contribute;