import './App.css'
import gotchuuImg from './assets/gotchuu_signin.png.jpg'

function App() {
  return (
    <div className="portfolio-app">
      <nav>
        <div className="logo">SK<span>.</span></div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="greeting">Hello, I'm</span>
          <h1>Sandra Kaye</h1>
          <h2 className="gradient-text">IT Graduate & Developer</h2>
          <p>Passionate about building efficient back-end systems and creative web solutions. Specialized in creating scalable applications with modern tech stacks.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn primary">Hire Me</a>
            <a href="#portfolio" className="btn secondary">View Work</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section gray-bg">
        <h3 className="section-title">My Projects</h3>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-img">
              <img 
                src={gotchuuImg} 
                alt="Gotchuu! Sign-in Screen" 
                className="card-photo" 
              />
            </div>
            <div className="project-info">
              <h4>Gotchuu! E-Commerce</h4>
              <p>A secure platform for toy collectors featuring escrow-based transactions and 3D visualization.</p>
              <div className="tags">
                <span>React</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h3 className="section-title">About Me</h3>
        <div className="about-container">
          <div className="about-text">
            <p>As an IT Graduate, I have built a solid foundation in understanding software development. I enjoy solving complex problems and turning ideas into functional code.</p>
            <div className="skills-grid">
              <div className="skill-card">Java</div>
              <div className="skill-card">Python</div>
              <div className="skill-card">C#</div>
              <div className="skill-card">Web Dev</div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section gray-bg">
        <h3 className="section-title">Work Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <h4>Software Developer Intern</h4>
            <span>2025 - Present</span>
            <p>Worked on various academic projects focusing on Java-based systems and Python-based projects.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h3 className="section-title">Get In Touch</h3>
        <div className="contact-card">
          <p>Ready to collaborate or have a question?</p>
          <div className="contact-info">
            <strong>📞 Contact Number:</strong>
            <p>+63 9687726783</p> 
          </div>
          <a href="mailto:sandra_kaye13@yahoo.com" className="btn primary">Send an Email</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Sandra Kaye Sabandal. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App