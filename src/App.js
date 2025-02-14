import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Not-so Gumroad</h1>
        <h3>Not-so neo-brutalism</h3>
      </header>

      <main>
        <section className="about">
          <h2>About this website</h2>
          <p>I'm just practising React. Did I spell practising right?</p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <ProjectCard
              title="UFV Course Outline Finder"
              description="a Chrome extension"
            />
            <ProjectCard
              title="japanhostelreviews.com"
              description="a hostel review site"
            />
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
