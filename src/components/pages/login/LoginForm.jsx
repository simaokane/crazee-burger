import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
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
      <Link to="/order">Vers OrderPage</Link>
    </form>
  );
}
