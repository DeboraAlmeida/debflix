import React from "react";
import Logo from "../Assets/LogoOp3.png";
import "../Styles/Menu.css";
import ButtonLink from "./ButtonLink";

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Debflix logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}
