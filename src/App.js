import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hornets from './components/Hornets';
import About from './components/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects, setProjects] = useState([]); // initialize with Array to store gh projects with.

  useEffect(() => {
    fetch('https://api.github.com/users/lyuhiroyama/repos')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => alert("something went wrong: ", error))
  }, []) // empty array second arg means 'only run once when page loads'


  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hornets" element={<Hornets />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <header className="App-header">
        <h1>Not-so Gumroad</h1>
        <h3>Not-so neo-brutalism</h3>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main>
        <section className="about">
          <h2>About this website</h2>
          <p>I'm just practising React. Did I spell practising right?</p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map(project => {
              return (
                <ProjectCard
                  key={project.id} // React uses internally. Produces 'warning' without this.
                  title={project.name}
                  description={project.description}
                />
              )
            })}
          </div>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>Email: notsogumroad@notsogumroad.com</p>
          <p>GitHub: github.com/lyuhiroyama</p>
        </section>
      </main>

      <footer>
        <p>Last updated: 2025</p>
      </footer>
    </div>
  );
}

export default App;
