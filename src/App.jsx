function App() {
  return (
    <div>
      <header className="bright">
        <nav>
          <h1 className="logo">Pandaal</h1>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <section className="hero page-section">
        <h1 className="heading primary">Event Management is Hard</h1>
        <h2 className="heading secondary">We can make stuff easy for you.</h2>
        <div className="content">
          <p>Avalible on iOS, Android and Web.</p>
          <div className="cta-flex">
            <button className="cta white primary">Download Now</button>
            <button className="cta white">Browse Online</button>
          </div>
        </div>
      </section>
      <section className="page-section">
        <h1>Heading</h1>
        <p>Text</p>
        <button className="cta primary">Action 1</button>
        <button className="cta">Action 2</button>
      </section>
      <section className="page-section"></section>
    </div>
  );
}

export default App;
