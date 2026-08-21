import { useState } from "react";

export default function LoginPage() {
  // state
  const [prenom, setPrenom] = useState("");

  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${prenom}`);
    setPrenom("");
  };

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  // affichage (render)

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={prenom}
          type="text"
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />
        <button>Accedez à votre espace</button>
      </form>
    </>
  );
}
