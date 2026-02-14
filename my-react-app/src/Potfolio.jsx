import React from "react";
import { motion } from "framer-motion";

// Single-file React component portfolio
// Tailwind CSS utility classes assumed available in the project
// Replace placeholder text, images and links with your real data

export default function Portfolio() {
  const name = "UMER ABDULLAH"; // CHANGE THIS
  const title = "Full‑Stack Developer & UI/UX Enthusiast"; // CHANGE THIS
  const resumeLink = "pdf.jpg"; // PLACE your resume file in public folder or use external URL

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Python", level: 75 },
  ];

  const projects = [
    {
      title: "Project One",
      desc: "A modern web app with real-time features and polished UI.",
      tech: ["React", "Socket.io", "Express"],
      link: "https://cyberify.co/",
    },
    {
      title: "Project Two",
      desc: "E‑commerce prototype with payment flows and admin dashboard.",
      tech: ["Next.js", "Stripe", "MongoDB"],
      link: "#",
    },
    {
      title: "Project Three",
      desc: "Data visualization dashboard with interactive charts.",
      tech: ["D3.js", "React"],
      link: "#",
    },
  ];

  const services = [
    { title: "Web Development", desc: "Responsive SPA/MPA, performance & SEO friendly." },
    { title: "UI/UX Design", desc: "Design systems, prototypes, accessible interfaces." },
    { title: "Consulting", desc: "Architecture, tech choice, scaling & security reviews." },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", url: "https://twitter.com/yourusername" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-xl font-bold">
            {name.split(" ")[0].charAt(0)}
          </div>
          <div>
            <div className="text-sm text-gray-300">{name}</div>
            <div className="text-xs text-gray-400">{title}</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={resumeLink} className="hidden sm:inline-block px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm">Download Resume</a>
          <div className="md:hidden text-gray-400">{/* mobile placeholder for menu */}</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">{name}</span>
            </h1>
            <p className="text-gray-300 max-w-xl">I build delightful web experiences — performant, accessible, and pixel-perfect. I love turning ideas into products that people enjoy using.</p>

            <div className="flex gap-4">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-gray-700">Contact Me</a>
            </div>

            <div className="flex gap-4 items-center text-sm text-gray-400">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="hover:text-white">{s.name}</a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-full h-72 md:h-96 rounded-2xl bg-gradient-to-r from-indigo-700 via-pink-700 to-purple-700 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-2xl font-semibold">Crafting beautiful interfaces</div>
                <p className="text-sm text-gray-200 mt-2">Interactive UI, micro-animations and clean code.</p>
              </div>
            </div>
            <div className="absolute -bottom-6 left-6 p-3 rounded-xl bg-black/30 backdrop-blur text-xs">Available for freelance</div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 text-gray-300">
                <p className="mb-4">
                  I'm a product-minded developer who enjoys building clean, maintainable code and polished user interfaces. I focus on accessibility, performance and delightful user experiences.
                </p>
                <p>
                  When I'm not coding I enjoy photography, sketching UI ideas, and learning about new frontend technologies.
                </p>
              </div>
              <div className="bg-gradient-to-tr from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg">
                <div className="text-sm text-gray-400">Location</div>
                <div className="font-medium">Karachi, Pakistan</div>
                <div className="mt-4 text-sm text-gray-400">Email</div>
                <div className="font-medium">hello@youremail.com</div>
                <div className="mt-4 text-sm text-gray-400">Availability</div>
                <div className="font-medium">Open for work</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((s) => (
                <div key={s.name} className="p-4 bg-gray-800 rounded-lg shadow-inner">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">{s.name}</div>
                    <div className="text-sm text-gray-400">{s.level}%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <motion.article key={p.title} whileHover={{ y: -6 }} className="p-6 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-black/20 rounded">{t}</span>
                    ))}
                  </div>
                  <a href={p.link} className="text-sm inline-block">View case study →</a>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="mt-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="p-6 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-2xl shadow">
                  <div className="text-xl font-semibold mb-2">{s.title}</div>
                  <div className="text-sm text-gray-300">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20 mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <form
                className="space-y-4 bg-gray-800 p-6 rounded-2xl"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.target);
                  const payload = Object.fromEntries(form.entries());
                  // For demo: open mail client with prefilled content
                  const mailto = `mailto:hello@youremail.com?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(payload.message + '\n\nFrom: ' + payload.name + ' <' + payload.email + '>')}`;
                  window.location.href = mailto;
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="name" required className="p-3 rounded bg-gray-900 border border-gray-700" placeholder="Your name" />
                  <input name="email" type="email" required className="p-3 rounded bg-gray-900 border border-gray-700" placeholder="Your email" />
                </div>
                <input name="subject" className="p-3 rounded bg-gray-900 border border-gray-700 w-full" placeholder="Subject" />
                <textarea name="message" rows={5} required className="p-3 rounded bg-gray-900 border border-gray-700 w-full" placeholder="Your message" />
                <div className="flex items-center justify-between">
                  <button type="submit" className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500">Send Message</button>
                  <a href={resumeLink} download className="text-sm">Download CV</a>
                </div>
              </form>

              <div className="p-6 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-700 flex flex-col gap-4">
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-medium">hello@youremail.com</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="font-medium">+92 300 0000000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="font-medium">Karachi, Pakistan</div>
                </div>

                <div className="mt-2">
                  <div className="text-sm text-gray-400 mb-2">Social</div>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-sm underline">{s.name}</a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <footer className="border-t border-gray-800 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} {name}. All rights reserved.</div>
          <div className="text-sm text-gray-400">Built with ❤️ — React + Tailwind + Framer Motion</div>
        </div>
      </footer>
    </div>
  );
}
