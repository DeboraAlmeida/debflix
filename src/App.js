import React from "react";
import styled from "styled-components";
import Menu from "./Components/Menu";
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./Components/BannerMain";
import Carousel from "./Components/Carousel";
import "./Styles/Layouts.css";

const AppWrapped = styled.div`
  background-color: #141414;
`;

function App() {
  return (
    <AppWrapped>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />
    </AppWrapped>
  );
}

export default App;
