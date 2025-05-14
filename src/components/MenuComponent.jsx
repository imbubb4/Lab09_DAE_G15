function MenuComponent(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Inicio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Series</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
          {/* Botón de modo oscuro/claro */}
          <button onClick={props.toggleTheme} className="btn btn-outline-light ms-3">
            {props.theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MenuComponent;
