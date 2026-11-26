import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";

type Language = "FR" | "EN" | "ES";

const translations = {
  FR: {
    title: "Musical Playlist Solo",
    subtitle: "Personnaliser votre Playlist",
    playlist: "Playlist",
    hits: "Hits du moment",
    search: "Recherche",
  },
  EN: {
    title: "Musical Playlist Solo",
    subtitle: "Customize your Playlist",
    playlist: "Playlist",
    hits: "Today's Hits",
    search: "Search",
  },
  ES: {
    title: "Musical Playlist Solo",
    subtitle: "Personaliza tu Playlist",
    playlist: "Lista de reproducción",
    hits: "Éxitos del momento",
    search: "Buscar",
  },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("FR");

  const text = translations[language];

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img
          src="http://localhost:3000/uploads/music-note-ocean.svg"
          alt="Logo Musical Playlist Solo"
        />
      </Link>

      <div className="header-center">
        <h1>{text.title}</h1>
        <p>{text.subtitle}</p>

        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {text.playlist}
          </Link>

          <Link to="/songs" onClick={() => setMenuOpen(false)}>
            {text.hits}
          </Link>

          <Link to="/search" onClick={() => setMenuOpen(false)}>
            {text.search}
          </Link>
        </nav>
      </div>

      <div className="header-actions">
        <div className="language-selector">
          {(["FR", "EN", "ES"] as Language[]).map((lang) => (
            <button
              key={lang}
              className={language === lang ? "active" : ""}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
