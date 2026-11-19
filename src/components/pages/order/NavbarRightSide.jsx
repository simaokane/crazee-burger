// import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide() {
  return (
    <NavbarRightSideStyled className="right-side">
      {/* <div className="admin-button">Admin Button </div> */}
      <Profile />
      {/* <div className="profile">
        <p>Bonjour {username}</p>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
      <div className="picture"></div> */}
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  /* background: purple; */
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */

  .profile {
    background: yellow;
  }
`;
