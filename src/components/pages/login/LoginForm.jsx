import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
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
