import "./App.css";

const sets = [
  { id: 1, title: "Japanese Vocabulary", cards: 25 },
  { id: 2, title: "Genki Lesson 1", cards: 18 },
];

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>BlitzLang</h2>

        <nav>
          <a className="active" href="#home">Home</a>
          <a href="#sets">My Sets</a>
          <a href="#match">Match Game</a>
          <a href="#tests">Practice Tests</a>
          <a href="#explore">Explore Sets</a>
        </nav>

        <button className="logout">Log Out</button>
      </aside>

      <main className="main" id="home">
        <header className="topbar">
          <span>Language Learning</span>
          <span className="profile">Guest</span>
        </header>

        <section className="welcome">
          <h1>Welcome to BlitzLang!</h1>
          <p>
            Study flashcards, practice your vocabulary, and
            improve your language skills.
          </p>
        </section>

        <section className="quick-actions">
          <a href="#sets" className="action-card">
            <h3>My Sets</h3>
            <p>Create and manage your flashcard sets.</p>
          </a>

          <a href="#match" className="action-card">
            <h3>Match Game</h3>
            <p>Match terms and definitions.</p>
          </a>

          <a href="#tests" className="action-card">
            <h3>Practice Tests</h3>
            <p>Test your knowledge with quizzes.</p>
          </a>

          <a href="#explore" className="action-card">
            <h3>Explore Sets</h3>
            <p>Find public sets from other users.</p>
          </a>
        </section>

        <section className="sets-section" id="sets">
          <div className="section-heading">
            <h2>Your Flashcard Sets</h2>
            <button onClick={() =>
              alert("Flashcard creation coming soon!")
            }>
              + Create Set
            </button>
          </div>

          <div className="set-list">
            {sets.map((set) => (
              <a
                className="set-card"
                href={`#set-${set.id}`}
                key={set.id}
              >
                <h3>{set.title}</h3>
                <span>{set.cards} cards</span>
                <span className="arrow">›</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;