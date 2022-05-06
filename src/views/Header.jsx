const Header = ({ children, navitems, brightness }) => {
  return (
    <header className="bright">
      <nav>
        <h1
          style={{ color: brightness === "light" ? "white" : "black" }}
          className="logo"
        >
          Pandaal
        </h1>
        <ul style={{ color: brightness === "light" ? "white" : "black" }}>
          {navitems}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
