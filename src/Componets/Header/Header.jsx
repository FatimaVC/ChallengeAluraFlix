import React from "react";
import styled from "styled-components";
import { Boton } from "../UI";
import Logotipo from "../Logotipo/LogoAlura";
import { Link, useResolvedPath } from "react-router-dom";

const Cabecera = styled.header`
  background-color: #000;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 15rem;
  }
`;

const Header = () => {
    const url = useResolvedPath().pathname;

    return(
       <Cabecera>
        {/* cuando hacemos clic en el logo de alura */}
          <Link to={"/"}>
             <Logotipo />
          </Link>

          {url === '/'
            ?
            <Link to={"/video"}>
               <Boton>Nuevo Video</Boton>
            </Link>
            :
            null
          }

       </Cabecera>
    )
}

export default Header