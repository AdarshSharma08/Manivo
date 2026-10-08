import { useState } from "react";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [field, setField] = useState("");
  const [branch, setBranch] = useState("");
  const [goal, setGoal] = useState("");
  const [course, setCourse] = useState("");

  if (started)
     {
      if (course === "C Programming") {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">MANIVO</div>

        <button
          className="login-btn"
          onClick={() => setCourse("")}
        >
          ← Back
        </button>
      </nav>

      <main className="dashboard-content">
        <p className="tagline">COURSE</p>

        <h1>C Programming Fundamentals</h1>

        <p className="dashboard-description">
          Build a strong programming foundation with C.
        </p>

        <div className="continue-card">
          <div>
            <span className="course-label">YOUR PROGRESS</span>

            <h3>35% Completed</h3>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>

        <section className="roadmap">
          <h2>Course Lessons</h2>

          <div className="roadmap-grid">
            <div className="roadmap-card">
              <span>01</span>
              <h3>Introduction to C</h3>
              <p>Understand C, compilers and your first program.</p>
            </div>

            <div className="roadmap-card">
              <span>02</span>
              <h3>Variables & Data Types</h3>
              <p>Learn how data is stored and used in C.</p>
            </div>

            <div className="roadmap-card">
              <span>03</span>
              <h3>Operators</h3>
              <p>Learn arithmetic, relational and logical operators.</p>
            </div>

            <div className="roadmap-card">
              <span>04</span>
              <h3>Conditional Statements</h3>
              <p>Learn if, else and switch statements.</p>
            </div>

            <div className="roadmap-card">
              <span>05</span>
              <h3>Loops</h3>
              <p>Master for, while and do-while loops.</p>
            </div>

            <div className="roadmap-card">
              <span>06</span>
              <h3>Functions</h3>
              <p>Learn how to create reusable blocks of code.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
      if (goal !== "") {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">MANIVO</div>

        <button className="login-btn">Profile</button>
      </nav>

      <main className="dashboard-content">
        <p className="tagline">YOUR PERSONALIZED ROADMAP</p>

        <h1>
          Welcome to Manivo 👋
        </h1>

        <p className="dashboard-description">
          Your learning journey is personalized for{" "}
          <strong>
            {field} • {branch} • {goal}
          </strong>
        </p>
<section className="continue-section">
  <div className="section-header">
    <h2>Continue Learning</h2>
    <span>Keep going 🔥</span>
  </div>

  <div className="continue-card">
    <div>
      <span className="course-label">CURRENT COURSE</span>

      <h3>C Programming Fundamentals</h3>

      <p>
        Learn the fundamentals of C and build a strong programming foundation.
      </p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <p className="progress-text">35% completed</p>
    </div>

    <button className="continue-btn">
      Continue →
    </button>
  </div> 
</section>
        <section className="roadmap">
          <h2>Your Learning Roadmap</h2>

          <div className="roadmap-grid">
           <div
  className="roadmap-card"
  onClick={() => setCourse("C Programming")}
>
  <span>01</span>
  <h3>C Programming</h3>
  <p>Build strong programming fundamentals.</p>
</div> 

            <div className="roadmap-card">
              <span>02</span>
              <h3>Data Structures & Algorithms</h3>
              <p>Master problem solving and coding.</p>
            </div>

            <div className="roadmap-card">
              <span>03</span>
              <h3>Python</h3>
              <p>Learn Python for development and AI.</p>
            </div>

            <div className="roadmap-card">
              <span>04</span>
              <h3>Machine Learning</h3>
              <p>Start building real AI/ML skills.</p>
            </div>

            <div className="roadmap-card">
              <span>05</span>
              <h3>Projects</h3>
              <p>Build projects to strengthen your portfolio.</p>
            </div>

            <div className="roadmap-card">
              <span>06</span>
              <h3>Placement Preparation</h3>
              <p>Aptitude, coding and interview preparation.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
      if (branch !== "") {
  return (
    <div className="selection-page">
      <div className="selection-card">
        <p className="tagline">STEP 3 OF 3</p>

        <h1>What's your goal?</h1>

        <p className="selection-description">
          Tell us what you want to achieve. Manivo will build your learning
          roadmap around it.
        </p>

        <div className="options">
          <button onClick={() => setGoal("Placement")}>
            🎯 Get a Placement
          </button>

          <button onClick={() => setGoal("Internship")}>
            💼 Get an Internship
          </button>

          <button onClick={() => setGoal("Projects")}>
            🚀 Build Projects
          </button>

          <button onClick={() => setGoal("Skills")}>
            🧠 Learn New Skills
          </button>

          <button onClick={() => setGoal("Business")}>
            💡 Start a Business
          </button>
        </div>
      </div>
    </div>
  );
}
    if (field === "B.Tech") {
      return (
        <div className="selection-page">
          <div className="selection-card">
            <p className="tagline">STEP 2 OF 3</p>

            <h1>What's your branch?</h1>

            <p className="selection-description">
              Choose your branch so Manivo can recommend the right skills for
              you.
            </p>

           <div className="options">
  <button onClick={() => setBranch("Computer Science")}>
    Computer Science
  </button>

  <button onClick={() => setBranch("AI / ML")}>
    AI / ML
  </button>

  <button onClick={() => setBranch("Information Technology")}>
    Information Technology
  </button>

  <button onClick={() => setBranch("Electronics")}>
    Electronics
  </button>

  <button onClick={() => setBranch("Mechanical")}>
    Mechanical
  </button>

  <button onClick={() => setBranch("Other")}>
    Other
  </button>
</div>
          </div>
        </div>
      );
    }

    return (
      <div className="selection-page">
        <div className="selection-card">
          <p className="tagline">LET'S GET STARTED</p>

          <h1>What are you studying?</h1>

          <p className="selection-description">
            Tell us about yourself so Manivo can personalize your learning
            journey.
          </p>

          <div className="options">
            <button onClick={() => setField("B.Tech")}>B.Tech</button>
            <button onClick={() => setField("BCA")}>BCA</button>
            <button onClick={() => setField("BBA")}>BBA</button>
            <button onClick={() => setField("Diploma")}>Diploma</button>
            <button onClick={() => setField("Other")}>Other</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">MANIVO</div>

        <button className="login-btn">Login</button>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <p className="tagline">YOUR SKILLS. YOUR FUTURE.</p>

          <h1>
            Learn skills that
            <span> actually matter.</span>
          </h1>

          <p className="description">
            Manivo helps students discover the right skills, courses and
            career roadmap based on their goals.
          </p>

          <button
            className="start-btn"
            onClick={() => setStarted(true)}
          >
            Get Started →
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;