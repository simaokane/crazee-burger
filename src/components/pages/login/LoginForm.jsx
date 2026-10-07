import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    //redirection de l'utilisateur vers une autre page lors de la soumission du formaulaire
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1 style={{ color: "red" }}>Bienvenue chez nous !</h1>
      <br />
      <h2 className="bonbon">Connectez-vous</h2>
      <br />
      <input
        value={inputValue}
        type="text"
        placeholder="Entrez votre prénom..."
        required
        onChange={handleChange}
      />
      <button>Accedez à votre espace</button>
    </form>
  );
}

/** 4 méthodes pour ajouter du style à un composant
 * 1. inline style
 * 2. object style
 * 3. modules CSS (avec className)
 * 4. global style (index.css)
 */

/** Styled-Components
 * éviter le style de collision (CSS, Sass)
 * éviter nested styling (Sass)
 */
