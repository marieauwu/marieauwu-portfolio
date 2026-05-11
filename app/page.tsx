import React from "react";

const info = {
  name: "Mariea",
  role: "UI/UX Designer • AI/ML Researcher • Developer",
  bio: "Passionate about crafting beautiful interfaces, researching intelligent systems, and building impactful technology through design and machine learning.",
  email: "marieauiux@gmail.com",
  github: "https://github.com/marieauwu",
  linkedin: "https://www.linkedin.com/in/mariea-mayen/",
};

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
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 font-sans scroll-smooth">
      
      {/* --- REFINED STICKY HEADER --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#0f172a]/50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Left: Brand Name */}
          <div className="text-white font-black tracking-tighter text-xl cursor-pointer hover:text-blue-500 transition-all duration-300">
            MARIEA.
          </div>

          {/* Right: Interactive Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-widest font-bold text-slate-400 hover:text-white transition-all duration-300 relative group"
              >
                {item}
                {/* Highlight Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="max-w-5xl mx-auto px-6 pt-48 pb-32 flex flex-col justify-center min-h-[85vh]">
        <div className="inline-block px-3 py-1 mb-6 w-fit text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
          Open to Internships and Works
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
          I'm <span className="text-[#3b1c5a] drop-shadow-[0_0_20px_rgba(59,28,90,0.4)]">{info.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mt-8 font-medium leading-relaxed">
          {info.role}. {info.bio}
        </p>

        {/* Social Links with Hover Effects */}
        <div className="flex gap-8 mt-12">
          {[
            { href: info.github, icon: info.github ? "Github" : "" },
            { href: info.linkedin, icon: "Linkedin" },
            { href: `mailto:${info.email}`, icon: "Email" }
          ].map((social, idx) => (
            <a key={idx} href={social.href} target="_blank" className="text-slate-500 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
              {/* Simplified SVG mapping or use icons directly */}
              <span className="text-xs uppercase font-bold tracking-widest">{social.icon}</span>
            </a>
          ))}
        </div>
      </section>

      {/* --- SKILLS / ABOUT SECTION --- */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-32 border-t border-slate-800/50">
        <h2 className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-16 font-black">Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-4 group">
              <div className="text-slate-600 group-hover:text-blue-500 transition-colors duration-500">
                {skill.icon}
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-32 border-t border-slate-800/50">
        <h2 className="text-xs uppercase tracking-[0.4em] text-[#d9a01c] mb-20 font-black">Selected Works</h2>
        <div className="space-y-32">
          {projects.map((p, i) => (
            <div key={i} className="group border-b border-slate-800/50 pb-20 cursor-pointer transition-all duration-700">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="max-w-2xl">
                  <h3 className="text-5xl md:text-7xl font-black text-white group-hover:italic group-hover:text-blue-500 transition-all duration-500 tracking-tighter uppercase">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-lg mt-6 leading-relaxed font-medium">
                    {p.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-[9px] uppercase tracking-widest font-black px-3 py-1 bg-white/5 text-slate-500 rounded-full group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- REFINED FOOTER / CONTACT --- */}
      <footer id="contact" className="bg-black/40 pt-32 pb-10 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                Let's make <br /> it <span className="text-blue-500 italic">happen.</span>
              </h2>
              <a 
                href={`mailto:${info.email}`} 
                className="text-2xl md:text-3xl font-bold text-slate-400 hover:text-white transition-all duration-300 border-b-2 border-white/10 hover:border-blue-500 pb-2"
              >
                {info.email}
              </a>
            </div>
            
            <div className="flex flex-col gap-6 text-left md:text-right">
              <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">Digital Spaces</span>
              <a href={info.linkedin} className="text-sm font-black hover:text-blue-500 transition-all tracking-widest uppercase">LinkedIn —</a>
              <a href={info.github} className="text-sm font-black hover:text-blue-500 transition-all tracking-widest uppercase">GitHub —</a>
            </div>
          </div>

          <div className="mt-40 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em] font-bold text-slate-600">
            <span>© {new Date().getFullYear()} MARIEA MAYEN</span>
            <div className="flex gap-8">
              <span>Next.js 14</span>
              <span>Tailwind CSS</span>
              <span>Framer Inspired</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}