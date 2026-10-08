import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { theme } from "../../../theme";

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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <hr />
        <h2>Connectez-vous</h2>
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
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  background: #36cf36;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }
`;
