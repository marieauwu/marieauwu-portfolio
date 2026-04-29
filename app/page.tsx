import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe 
} from "lucide-react"; // Icons er jonno


const info = {
  name: "Mariea",
  role: "UI/UX Designer || AI/ML Researcher || Developer",
  bio: "Passionate about crafting beautiful interfaces, researching intelligent systems, and building impactful technology through design and machine learning.",
  email: "marieauiux@gmail.com",
  github: "https://github.com/marieauwu",
  linkedin: "https://linkedin.com/in/your-profile"
};

const skills = [
  // Design & UI/UX
  { name: "UI/UX Design", icon: <Globe size={20} /> },
  { name: "Figma", icon: <Code2 size={20} /> },
  { name: "Framer", icon: <Globe size={20} /> },
  { name: "Adobe Photoshop", icon: <Cpu size={20} /> },
  { name: "Adobe Illustrator", icon: <Code2 size={20} /> },
  { name: "Adobe XD", icon: <Globe size={20} /> },

  // Product Design
  { name: "Wireframing", icon: <Terminal size={20} /> },
  { name: "Prototyping", icon: <Code2 size={20} /> },
  { name: "Design Systems", icon: <Cpu size={20} /> },
  { name: "Interaction Design", icon: <Globe size={20} /> },
  { name: "User Research", icon: <Terminal size={20} /> },
  { name: "Usability Testing", icon: <Code2 size={20} /> },

  // Development
  { name: "React / Next.js", icon: <Globe size={20} /> },
  { name: "Frontend Development", icon: <Code2 size={20} /> },

  // AI / Research
  { name: "Python", icon: <Cpu size={20} /> },
  { name: "Machine Learning", icon: <Terminal size={20} /> },
  { name: "Deep Learning", icon: <Cpu size={20} /> },
  { name: "TensorFlow / Scikit-learn", icon: <Code2 size={20} /> },


];

const projects = [
  {
    title: "Flower Detection System using Deep Learning",
    description:
      "Built a deep learning flower classification system using transfer learning and deployed it in a Flask web app for interactive image prediction.",
    tech: [
      "Python",
      "TensorFlow/Keras",
      "Flask",
      "OpenCV",
      "NumPy",
      "Pandas"
    ],
    link: "#",
  },

  {
    title: "Climate-Aware Traffic Congestion Prediction",
    description:
      "Developed a machine learning model using traffic and weather data to predict congestion through multimodal analysis.",
    tech: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Pandas",
      "Data Analysis"
    ],
    link: "#",
  },

  {
    title: "SafeHer BD – Women-only Forum System",
    description:
      "Designed and developed a secure women-only forum with anonymous posting, admin moderation and responsive interface.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Laravel",
      "MySQL",
      "AJAX"
    ],
    link: "#",
  },

  {
    title: "Smart Trolley (IoT Project)",
    description:
      "Created a smart shopping trolley using embedded systems and IoT for automated product tracking and smart billing.",
    tech: [
      "Arduino",
      "IoT",
      "Embedded Systems",
      "C/C++",
      "Sensors"
    ],
    link: "#",
  },

  {
    title: "Offline Email Management System",
    description:
      "Built a Bash-based offline email management system with Zenity GUI for local email operations without internet.",
    tech: [
      "Bash",
      "Zenity",
      "Linux",
      "Shell Programming"
    ],
    link: "#",
  },

  {
    title: "Bank Management System",
    description:
      "Developed a Python OOP-based banking application supporting account operations and fund transfers.",
    tech: [
      "Python",
      "OOP"
    ],
    link: "#",
  },

  {
    title: "Library Management System",
    description:
      "Created a Java-based library management application with book issuing and return functionalities.",
    tech: [
      "Java",
      "OOP"
    ],
    link: "#",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
          Available for Work
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          I'm <span className="text-blue-500">{info.name}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          {info.bio}
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a href={info.github} className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
          <a href={info.linkedin} className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
          <a href={`mailto:${info.email}`} className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
        </div>
      </section>

      {/* 2. SKILLS SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-blue-500 inline-block"></span> Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition">
              <span className="text-blue-400">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-blue-500 inline-block"></span> Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-slate-800/30 border border-slate-800 hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-blue-500/10 text-blue-400 rounded font-bold">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition">
                View Live Project <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} {info.name}. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}