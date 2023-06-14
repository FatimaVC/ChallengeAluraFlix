import React from "react";
import styled from "styled-components";


const Tabla = styled.table`
border:3px solid #2A7AE4;
color: #fff;
max-width: 100%;
width: 100%;
margin: 4rem 0;

@media (max-width: 768px) {
    display: none;
}
`;
const TableHead = styled.th`
    font-size: 2.5rem;
    text-align: left;
    border-bottom: 3px solid #2a7ae4;
    border-right: 3px solid #2a7ae4;
    padding: .5rem;

    :last-child {
        border-right: none;
    }
`

const TableD = styled.td`
    font-size: 1.8rem;
    font-weight: normal;
    padding: 1rem .5rem;
    border-bottom: 3px solid #000;
    border-right: 3px solid #000;
`

const style = {
    border: '1px solid black',
    borderColor: 'red'
}

const DataTable = ({ categorias, eliminarCategoria, editarCategoria }) => {

    return <>
      <Tabla>
         <tbody>
            <tr style={style}>
            <TableHead>Nombre</TableHead>
                    <TableHead>Descripcion</TableHead>
                    <TableHead>Editar</TableHead>
                    <TableHead>Eliminar</TableHead>
            </tr>
             {/* categoria es el objeto e
             indez es la posición de éste */}
            {categorias.map((categoria, index) => {
                 // destructuramos la información
                const { titulo, descripcion } = categoria
                // pasamos como key la posicion index
                return <tr key={index}>
                        <TableD>{titulo}</TableD>
                        <TableD>{descripcion}</TableD>
                        <TableD
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                editarCategoria(categoria.id);
                            }}
                        >Editar</TableD>
                        <TableD
                            style={{ cursor: 'pointer' }}
                            onClick={() => { eliminarCategoria(categoria.id) }}
                        >Eliminar</TableD>
                    </tr>
                })}
            
         </tbody>

      </Tabla>
    
    </>
}

export default DataTable;


