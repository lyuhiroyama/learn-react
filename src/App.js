import React from 'react';
import './App.css';

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
            <div className="project-card">
              <h3>UFV Course Outline Finder</h3>
              <p>a Chrome extension</p>
            </div>
            <div className="project-card">
              <h3>japanhostelreviews.com</h3>
              <p>a hostel review site</p>
            </div>
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
