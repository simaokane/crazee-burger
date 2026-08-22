import { useState } from "react";

export default function LoginPage() {
  // state
  // const [prenom, setPrenom] = useState("");
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
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <br />
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          type="text"
          placeholder="Entrez votre prénom..."
          required
          onChange={handleChange}
        />
        <button>Accedez à votre espace</button>
      </form>
    </>
  );
}
