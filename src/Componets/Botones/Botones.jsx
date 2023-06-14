import React from "react";
import styled from "styled-components";
import { BtnForm } from "../UI";
import { Link } from "react-router-dom";

const DivContenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const styles = {
    border: 'none',
    borderRadius: '.5rem',
    fontSize: '20px',
    padding: '1.5rem 3rem',
    margin: '3rem 0',
    maxWidth: '95%',
    cursor: 'pointer',
    backgroundColor: "#9e9e9e",
    color: "#000"
}

const Botones = ({ categoria, reset}) => {
    return <>
    
       <DivContenedor className="contenedor">

          <div style={{ display: 'flex', gap: '4rem'}}>

              <BtnForm type="submit" id="btnGuardar"  
                       style={{ backgroundColor: "#2A7AE4", color: "#FFFFFF"}}
                       >Guardar</BtnForm>

              <input type="button" value= "Limpiar" id="btnLimpiar" 
                    style={styles} onClick={() => reset()}></input>
          </div>


          {!categoria 
            ?
            <Link to={"/categoria"}> 
                <BtnForm
                  style={{ backgroundColor: "#2A7AE4",
                        color: "#FFFFFF",
                        width: "25rem" }}
                       >Nueva Categoria
                </BtnForm> 
            </Link>
            :
            <Link to={"/video"}> 
                <BtnForm 
                   style={{ backgroundColor: "#2A7AE4",
                            color:"#FFFFFF"}}
                            >Atrás
                </BtnForm>
            </Link>
       
       }

     </DivContenedor>  
    
    </>

}

export default Botones;
