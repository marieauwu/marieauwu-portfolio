import Image from "next/image";

// Eikhane project-er list thakbe (Dynamic Data)
const projects = [
  {
    title: "My First Project",
    description: "A cool project built with Next.js",
    link: "#",
    tech: ["Next.js", "Tailwind"]
  },
  {
    title: "E-commerce App",
    description: "Full stack shopping site",
    link: "#",
    tech: ["React", "Firebase"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Hi, I'm Mariea
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          A passionate developer building dynamic web experiences.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition">
          Contact Me
        </button>
      </section>

      {/* Dynamic Projects Section */}
      <section className="max-w-6xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition border border-gray-700">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="bg-gray-700 text-xs px-2 py-1 rounded text-blue-300">{t}</span>
                ))}
              </div>
              <a href={project.link} className="text-blue-400 hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}