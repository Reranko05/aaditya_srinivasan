import React from "react";

// You can save this file as App.tsx (if your project uses TypeScript) or App.jsx (if JavaScript).

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 antialiased">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-wide">Aaditya Srinivasan</h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-sky-400">About</a>
            <a href="#projects" className="hover:text-sky-400">Projects</a>
            <a href="#experience" className="hover:text-sky-400">Experience</a>
            <a href="#contact" className="hover:text-sky-400">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Reranko05"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm border border-gray-700 rounded hover:border-sky-400 hover:text-sky-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aaditya-srinivasan-0b6902288"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm bg-sky-500 text-black font-medium rounded hover:bg-sky-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight">
              Hi, I am <span className="text-sky-400">Aaditya</span>
            </h2>
            <p className="mt-6 text-gray-400 max-w-lg">Third-year Computer Science student (CGPA 9.40) focused on cybersecurity, AI, and full-stack engineering. I build production-ready systems — from secure authentication to ML pipelines and real-time analytics.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-5 py-2 border border-gray-700 rounded hover:border-sky-400 hover:text-sky-400">Get in touch</a>
              <a href="/Aaditya_Resume.pdf" download className="px-5 py-2 bg-sky-500 text-black font-medium rounded hover:bg-cyan-400">Download Resume</a>
            </div>

            <div className="mt-8 text-sm text-gray-500 grid grid-cols-2 gap-4 max-w-sm">
              <div><span className="font-semibold text-gray-200">Email:</span> aadityasri03@gmail.com</div>
              <div><span className="font-semibold text-gray-200">Phone:</span> +91 97170 32039</div>
              <div><span className="font-semibold text-gray-200">Location:</span> Ghaziabad, U.P.</div>
            </div>
          </div>

          {/* Circle avatar placeholder */}
          <div className="flex justify-center">
            <div className="flex justify-center">
              <img
                src="/AadityaaPhoto.png"                // <--- use root path, not /public/...
                alt="Aaditya Srinivasan"
                loading="lazy"
                className="w-72 h-72 rounded-full object-cover border-4 border-sky-500 shadow-lg bg-gray-800"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/fallback-avatar.png'; // put fallback in public/
                }}
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-24">
          <h3 className="text-3xl font-bold text-sky-400">About</h3>
          <p className="mt-4 text-gray-400 max-w-3xl">I’m a systems-minded developer who enjoys building secure applications that run in production. My recent work combines ML (NLP, computer vision) with robust backend systems — think real-time analytics, JWT-secured APIs and fraud-prevention checks.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-200">Skills</h4>
              <p className="mt-2 text-sm text-gray-400">Python, C++, JavaScript, React, FastAPI, Flask, PostgreSQL, TensorFlow, PyTorch, Hugging Face</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-200">Frameworks & Tools</h4>
              <p className="mt-2 text-sm text-gray-400">SQLAlchemy, JWT, Docker, Git, VSCode, Hadoop, Spark</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-200">Certifications</h4>
              <p className="mt-2 text-sm text-gray-400">Infosys Springboard: NLP & AI Primer (June 2025), Big Data & ML Bootcamp (CDAC)</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-sky-400">Selected Projects</h3>
            <a href="#" className="text-sm text-sky-400 hover:underline">View all</a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <article className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-sky-500 transition">
              <h4 className="font-semibold text-lg text-gray-200">Multilingual Cyber Threat Intelligence (CTI) Platform</h4>
              <p className="mt-3 text-sm text-gray-400">Platform that classifies malicious IOCs from Telegram using a fine-tuned XLM-RoBERTa model — 95% accuracy. Flask/React dashboard with real-time translation for 100+ languages.</p>
              <p className="mt-3 text-xs text-gray-500">Tech: Python, Hugging Face, XLM-RoBERTa, Flask, React</p><br />
              <a href="https://github.com/Reranko05/multilingual-cyber-threat-intelligence" target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm bg-sky-500 text-black font-medium rounded hover:bg-sky-400">View Code</a>
            </article>

            <article className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-sky-500 transition">
              <h4 className="font-semibold text-lg text-gray-200">SafetyEye — Real-time PPE Detection</h4>
              <p className="mt-3 text-sm text-gray-400">Built an AI pipeline (YOLOv8) achieving 87% mAP@0.5 for PPE detection with a low-latency streaming pipeline and live analytics dashboard.</p>
              <p className="mt-3 text-xs text-gray-500">Tech: YOLOv8, Python, Flask/Realtime Dashboard</p>
            </article>

            <article className="md:col-span-2 bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-sky-500 transition">
              <h4 className="font-semibold text-lg text-gray-200">Peer-to-Peer Payment App</h4>
              <p className="mt-3 text-sm text-gray-400">Secure payment platform with JWT auth, role-based access control, transaction classification, and fraud checks. Full-stack app with FastAPI backend and React frontend.</p>
              <p className="mt-3 text-xs text-gray-500">Tech: FastAPI, PostgreSQL, SQLAlchemy, JWT, React</p><br />
              <a href="https://github.com/Reranko05/visanet-project" target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm bg-sky-500 text-black font-medium rounded hover:bg-sky-400">View Code</a>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-24">
          <h3 className="text-3xl font-bold text-sky-400">Experience</h3>
          <div className="mt-10 space-y-6">
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-200">AI & Machine Learning Intern — Infosys Springboard</h4>
              <p className="text-xs text-gray-500">Aug 2025 - Present</p>
              <p className="mt-2 text-sm text-gray-400">Worked on SafetyEye — implemented YOLOv8 fine-tune, low-latency video pipeline and dashboard alerts.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-200">Developer Lead — AEGIS Club, SRMIST</h4>
              <p className="text-xs text-gray-500">Aug 2025 - Present</p>
              <p className="mt-2 text-sm text-gray-400">Mentored student developers, led hackathon planning and judged technical projects.</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-24">
          <h3 className="text-3xl font-bold text-sky-400">Education</h3>
          <div className="mt-6 bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-200">SRM Institute of Science and Technology — B.Tech Computer Science (Cybersecurity)</h4>
            <p className="text-sm text-gray-400 mt-2">CGPA: 9.40 • Relevant coursework: ML, Systems, Security</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24 mb-24">
          <h3 className="text-3xl font-bold text-sky-400">Contact</h3>
          <div className="mt-6 md:flex gap-8">
            <form className="flex-1 bg-gray-900 border border-gray-800 p-6 rounded-lg">
              <label className="block text-sm font-medium text-gray-200">Your Email</label>
              <input className="mt-2 w-full border border-gray-700 bg-black rounded px-3 py-2 text-white placeholder-gray-500" placeholder="name@example.com" />
              <label className="block text-sm font-medium text-gray-200 mt-4">Message</label>
              <textarea className="mt-2 w-full border border-gray-700 bg-black rounded px-3 py-2 h-28 text-white placeholder-gray-500" placeholder="Say hi — I reply fast."></textarea>
              <div className="mt-4">
                <button type="button" className="px-5 py-2 bg-sky-500 text-black font-medium rounded hover:bg-sky-400">Send Message</button>
              </div>
            </form>

            <aside className="w-full md:w-72 bg-gray-900 border border-gray-800 p-6 rounded-lg mt-6 md:mt-0">
              <h4 className="font-semibold text-gray-200">Quick Links</h4>
              <ul className="mt-4 text-sm text-gray-400 space-y-2">
                <li><a href="https://github.com/Reranko05" className="hover:text-sky-400">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/aaditya-srinivasan-0b6902288" className="hover:text-sky-400">LinkedIn</a></li>
                <li><a href="/Aaditya_Resume.pdf" className="hover:text-sky-400">Resume (PDF)</a></li>
              </ul>
            </aside>
          </div>
        </section>

        <footer className="mt-12 py-8 text-center text-sm text-gray-600 border-t border-gray-800">
          © {new Date().getFullYear()} Aaditya Srinivasan — Built with React & Tailwind • Black + Sky Blue theme
        </footer>
      </main>
    </div>
  );
}
