import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const name = "UMER ABDULLAH";
  const title = "Full-Stack Developer & UI/UX Specialist";
  const resumeLink = "pdf.pdf";
  const profilePic = "profile.jpeg";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 92, color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
    { name: "Next.js", level: 80, color: "from-gray-100 to-gray-400" },
    { name: "Tailwind CSS", level: 90, color: "from-sky-400 to-sky-600" },
    { name: "PHP", level: 95, color: "from-indigo-400 to-indigo-600" },
    { name: "MySQL", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "Python", level: 75, color: "from-blue-500 to-indigo-700" },
    { name: "UI/UX Design", level: 90, color: "from-rose-500 to-pink-600" },
  ];

  const projects = [
    {
      title: "Dynamic Hospital CMS",
      desc: "Full-scale medical management system with patient records and booking capabilities.",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      link: "https://hameedhospital.com/",
      image: "hero.png"
    },
    {
      title: "IBFAL Business System",
      desc: "A custom-built enterprise solution designed to streamline business operations and internal workflows.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "#",
      image: "hero.png"
    },
    {
      title: "BM-GROUP OF COMPANY ERP",
      desc: "Comprehensive ERP suite comprising Logistic, Solar, Decor, and Enterprises ERP modules.",
      tech: ["PHP", "MySQL", "ERP Architecture"],
      link: "#",
      image: "hero.png"
    },
    {
      title: "Courier Management System",
      desc: "Automated logistics platform for tracking shipments, managing riders, and optimizing delivery routes.",
      tech: ["React", "Node.js", "Express"],
      link: "#",
      image: "hero.png"
    },
    {
      title: "Inventory Control system",
      desc: "Advanced stock management solution with real-time alerts, reporting, and supplier integration.",
      tech: ["PHP", "MySQL", "jQuery"],
      link: "#",
      image: "hero.png"
    },
    {
      title: "E-commerce Management System",
      desc: "Robust online store platform with product management, orders, and secure checkout.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "#",
      image: "hero.png"
    },
  ];

  const services = [
    { title: "Web Development", desc: "Building high-performance, SEO-optimized SPAs and scalable backends.", icon: "🌐" },
    { title: "UI/UX Design", desc: "Creating intuitive, accessible, and stunning user interfaces with a focus on experience.", icon: "🎨" },
    { title: "Technical Consulting", desc: "Advising on architecture, tech stacks, and performance optimization.", icon: "💡" },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "🐙" },
    { name: "LinkedIn", url: "https://linkedin.com/in/umer-abdullah-066986279", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/ma_lik_aw_an", icon: "🐦" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const menuLinks = [
    { name: "About", href: "#about", icon: "👨‍💻" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Services", href: "#services", icon: "🛠️" },
    { name: "Contact", href: "#contact", icon: "📞" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold text-lg font-outfit">
                UA
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block font-outfit uppercase">{name}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.a
              href={resumeLink}
              className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span className="h-0.5 bg-white rounded-full" animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} />
              <motion.span className="h-0.5 bg-white rounded-full" animate={{ opacity: isMenuOpen ? 0 : 1 }} />
              <motion.span className="h-0.5 bg-white rounded-full" animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {menuLinks.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold font-outfit"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* Hero Section */}
        <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider font-outfit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                AVAILABLE FOR HIRE
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-extrabold font-outfit leading-[1.1] tracking-tight">
                Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Digital</span> <br />
                Experiences.
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                I'm <span className="text-white font-semibold">{name}</span>, a developer dedicated to building high-performance web applications that merge flawless code with exceptional UI/UX.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/20"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:scale-110 transition-all"
                  title={s.name}
                >
                  <span className="text-xl">{s.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full scale-75" />

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
              <img
                src={profilePic}
                alt={name}
                className="relative w-80 h-[28rem] md:w-[26rem] md:h-[34rem] object-cover rounded-[2rem] border border-white/10 shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 p-6 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-widest leading-none mb-1">Experience</div>
                    <div className="text-xl font-bold font-outfit leading-none">3+ Months</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center space-y-6">
            <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">Introduction</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-outfit">A developer's journey.</h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              I’m <span className="text-white font-medium">Umer Abdullah</span>, a Full Stack Developer from Multan, Pakistan.
              With a foundation from PNY and professional experience at HAT-TECH, I specialize in building robust applications with React and PHP.
              I thrive on solving complex problems and turning ideas into polished digital realities.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="space-y-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-outfit">Technical Arsenal.</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s, idx) => (
              <motion.div
                key={s.name}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${s.color} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.08] transition-opacity`} />
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold font-outfit text-white/90">{s.name}</span>
                  <span className="text-sm font-mono text-gray-500">{s.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    transition={{ duration: 1.5, delay: idx * 0.1 }}
                    className={`h-full bg-gradient-to-r ${s.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-outfit">Featured Projects.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group relative rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col p-8 justify-center items-center text-center space-y-4 min-h-[250px]"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <h3 className="text-2xl font-bold font-outfit relative z-10">{p.title}</h3>

                <div className="flex flex-wrap justify-center gap-2 relative z-10">
                  {p.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold tracking-widest text-indigo-300 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">What I Offer</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-outfit text-center">Software Solutions.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all text-center space-y-6"
              >
                <div className="w-16 h-16 mx-auto rounded-3xl bg-indigo-500/10 flex items-center justify-center text-3xl">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold font-outfit">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative rounded-[4rem] bg-indigo-600 overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

          <div className="relative p-12 md:p-20 flex flex-col items-center text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white">Let's build something <br /> amazing together.</h2>
            <p className="text-indigo-100 text-lg max-w-2xl opacity-80">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
              <a href="mailto:umerabdullah813@gmail.com" className="flex items-center justify-center gap-3 p-6 rounded-[2rem] bg-white text-black font-bold hover:bg-gray-100 transition-all">
                📧 Email Me
              </a>
              <a href="https://wa.me/923151619900" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-6 rounded-[2rem] bg-black text-white font-bold hover:bg-black/80 transition-all">
                💬 WhatsApp
              </a>
            </div>

            <div className="flex gap-6 pt-4 text-white/60">
              <div className="text-sm">📍 Multan, Pakistan</div>
              <div className="text-sm">•</div>
              <div className="text-sm">📞 +92 315-1619900</div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative mt-20 border-t border-white/5 bg-black/40 backdrop-blur-xl pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px]">
                  <div className="w-full h-full rounded-xl bg-black flex items-center justify-center font-bold text-lg font-outfit">
                    UA
                  </div>
                </div>
                <span className="font-bold text-2xl tracking-tight font-outfit uppercase">{name}</span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Dedicated Full-Stack Developer creating high-performance web solutions with a focus on user experience and clean architecture.
              </p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-white font-bold font-outfit uppercase tracking-widest text-sm">Navigation</h4>
              <ul className="space-y-4">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 group-hover:scale-125 transition-all"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white font-bold font-outfit uppercase tracking-widest text-sm">Get in Touch</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="text-indigo-400 text-lg">📧</span>
                  <span>umerabdullah813@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="text-indigo-400 text-lg">📞</span>
                  <span>+92 315-1619900</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="text-indigo-400 text-lg">📍</span>
                  <span>Multan, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-xs text-center md:text-left">
            <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
            <div className="flex gap-6 italic">
              Built with <span className="text-rose-500">❤️</span> using React & Tailwind
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}