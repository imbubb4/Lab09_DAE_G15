function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">
          &copy; {year} <strong>Mi App de Series</strong> — Todos los derechos reservados.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="text-white-50 text-decoration-none">Términos</a>
          <a href="#" className="text-white-50 text-decoration-none">Privacidad</a>
          <a href="#" className="text-white-50 text-decoration-none">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
