import "./../styles/styles.css";

export const Footer = () => {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.</p>
        <p>
          <a href="/privacy-policy" className="footer__link">Política de Privacidad</a>
        </p>
      </footer>
    );
};