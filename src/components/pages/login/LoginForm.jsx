import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

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
    <div action="submit" onSubmit={handleSubmit}>
      <div className="container-text">
        <h1>Bienvenue chez nous !</h1>
        <br />
        <br />
        <h2 className="bonbon">Connectez-vous</h2>
        <br />
      </div>
      <div className="cta-container">
        <input
          value={inputValue}
          type="text"
          placeholder="Entrez votre prénom"
          required
          onChange={handleChange}
        />
        <button>Acceder à mon espace</button>
      </div>
    </div>
  );
}
