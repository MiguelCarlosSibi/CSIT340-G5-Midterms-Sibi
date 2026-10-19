import FeatureCard from "./FeatureCard";

const features = [
  {
    badge: "Free",
    title: "Open source",
    description: "Read the code and use it in any project.",
  },
  {
    badge: "Small",
    title: "Lightweight",
    description: "Import only the components the page uses.",
  },
  {
    badge: "Simple",
    title: "Easy to learn",
    description: "Every component takes a few plain props.",
  },
];

function Features() {
  return (
    <main className="grid grid-cols-3 gap-8 px-20">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          badge={feature.badge}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </main>
  );
}

export default Features;