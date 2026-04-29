import React from "react";

const info = {
  name: "Mariea",
  role: "UI/UX Designer • AI/ML Researcher • Developer",
  bio: "Passionate about crafting beautiful interfaces, researching intelligent systems, and building impactful technology through design and machine learning.",
  email: "marieauiux@gmail.com",
  github: "https://github.com/marieauwu",
  linkedin: "https://www.linkedin.com/in/mariea-mayen/",
};

// SVG Icons as components to keep code clean
const Icons = {
  Design: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.607-.48 2.303-1.137.443-.418.919-.732 1.547-.732 1.325 0 2.15 1.048 3.23 1.048C21.074 21.179 22 20.1 22 18c0-8.837-4.477-16-10-16z"/></svg>,
  Brain: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>,
  Code: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Layers: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  Pen: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.5 1.5"/><path d="M7 11l5-5"/></svg>
};

const skills = [
  { name: "UI/UX Design", icon: <Icons.Design /> },
  { name: "Figma", icon: <Icons.Pen /> },
  { name: "Framer", icon: <Icons.Layers /> },
  { name: "Python", icon: <Icons.Brain /> },
  { name: "Machine Learning", icon: <Icons.Brain /> },
  { name: "React / Next.js", icon: <Icons.Code /> },
  { name: "Design Systems", icon: <Icons.Layers /> },
  { name: "User Research", icon: <Icons.Brain /> },
];

const projects = [
  {
    title: "Flower Detection System",
    description: "Built a deep learning flower classification system using transfer learning and Flask.",
    tech: ["Python", "TensorFlow", "Flask"],
    link: "#",
  },
  {
    title: "SafeHer BD",
    description: "A secure women-only forum with anonymous posting and moderation.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "Smart Trolley (IoT)",
    description: "Automated product tracking and smart billing using Arduino and sensors.",
    tech: ["IoT", "Arduino", "C++"],
    link: "#",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 font-sans">
      
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
          Open to Internships and Works
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          I'm <span className="text-blue-500">{info.name}</span>
        </h1>
        <p className="text-blue-400 text-lg md:text-xl font-medium mb-6 uppercase tracking-tight">
          {info.role}
        </p>
        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {info.bio}
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a href={info.github} target="_blank" className="hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href={info.linkedin} target="_blank" className="hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href={`mailto:${info.email}`} className="hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
          <span className="w-8 h-px bg-blue-500"></span> Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all group">
              <span className="text-blue-400 group-hover:scale-110 transition-transform">{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
          <span className="w-8 h-px bg-blue-500"></span> Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-800/20 border border-slate-800 hover:bg-slate-800/40 transition-all border-b-4 border-b-transparent hover:border-b-blue-500">
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-700 text-slate-300 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} className="text-blue-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Project Details <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-16 text-slate-500 text-xs border-t border-slate-800">
        © {new Date().getFullYear()} {info.name}. Built with precision.
      </footer>
    </div>
  );
}