import './App.css'

function App() {
return ( <div className="portfolio"> <nav className="navbar"> <a href="#home" className="logo">DR<span>.</span></a>

```
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact" className="contact-btn">Contact ↗</a>
    </div>
  </nav>

  <main>
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot"></span> AVAILABLE FOR INTERNSHIPS
        </p>

        <h1>Hi, I'm <span>Divya</span><br />
          Frontend Developer<span className="purple-dot">.</span>
        </h1>

        <p className="hero-description">
          I build modern, responsive and user-friendly web experiences
          with clean code and creative ideas.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">Explore My Work ↗</a>
          <a href="#contact" className="secondary-btn">Let's Connect</a>
        </div>

        <div className="quick-info">
          <div><strong>01</strong><span>Creative Thinker</span></div>
          <div><strong>02</strong><span>Problem Solver</span></div>
          <div><strong>03</strong><span>Always Learning</span></div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="profile-card">
          <div className="profile-top"><span>✳</span> DEVELOPER PORTFOLIO</div>
          <div className="avatar">DR<span>.</span></div>
          <h2>Divya Raghuwanshi</h2>
          <p>Frontend Developer</p>
          <div className="code-line"><span>const</span> passion = "building for web";</div>
          <div className="card-tags"><span>React</span><span>JavaScript</span><span>CSS</span></div>
        </div>
        <div className="floating-badge badge-top">✦ Creative UI</div>
        <div className="floating-badge badge-bottom">{"</>"} Clean Code</div>
      </div>
    </section>

    <section className="about section" id="about">
      <p className="section-label">01 — ABOUT ME</p>
      <h2>Turning ideas into <span>digital experiences.</span></h2>
      <p className="section-description">
        I'm a Computer Science student passionate about frontend development,
        thoughtful design and building useful web applications. I'm always
        exploring new technologies and improving my skills.
      </p>
    </section>

    <section className="section" id="skills">
      <p className="section-label">02 — MY TOOLKIT</p>
      <h2>Skills & <span>Technologies</span></h2>
      <div className="skills-grid">
        {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Python', 'Git & GitHub'].map(skill => (
          <div className="skill-card" key={skill}><span>✦</span>{skill}</div>
        ))}
      </div>
    </section>

    <section className="section" id="projects">
      <p className="section-label">03 — SELECTED WORK</p>
      <h2>Projects I'm <span>building.</span></h2>
      <div className="projects-grid">
        <article className="project-card">=
          <div className="project-number">PROJECT / 01</div>
          <div className="project-icon">✧</div>
          <h3>AI Resume Analyzer</h3>
          <p>A web application designed to analyze resumes and help users explore their skills.</p>
          <div className="project-tags"><span>Python</span><span>Flask</span><span>SQLite</span></div>
        </article>
        <article className="project-card">
          <div className="project-number">PROJECT / 02</div>
          <div className="project-icon">◈</div>
          <h3>Shop Website</h3>
          <p>A responsive shopping website concept focused on clean layouts and easy navigation.</p>
          <div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
        </article>
      </div>
    </section>

    <section className="contact-section" id="contact">
      <p className="section-label">04 — GET IN TOUCH</p>
      <h2>Have a project in <span>mind?</span></h2>
      <p>I'm open to learning opportunities, collaborations and internships.</p>
      <a className="primary-btn" href="https://mail.google.com/mail/?view=cm&to=raghuwanshidivya077@gmail.com">Let's Talk ↗</a>
    
    </section>
  </main>

  <footer>
    <a href="#home" className="logo">DR<span>.</span></a>
    <p>Designed & built with curiosity by Divya.</p>
    <a href="#home">Back to top ↑</a>
  </footer>
</div>


)
}

export default App
