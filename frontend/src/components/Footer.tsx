import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src="http://localhost:3000/uploads/music-note-ocean.svg"
          alt="Logo Musical Playlist Solo"
        />
      </div>

      <div className="footer-brand">
        <h2>Musical Playlist Solo</h2>
        <p>Personnaliser votre Playlist</p>
      </div>

      <div className="footer-sections">
        <div>
          <h3>Contact</h3>
          <p>Contactez-nous</p>
        </div>

        <div>
          <h3>Mentions légales</h3>
        </div>

        <div>
          <h3>
            <Link to="/">Retour à l'accueil</Link>
          </h3>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Musical Playlist Solo - Tous droits réservés</p>
      </div>
    </footer>
  );
}
