import styled from "styled-components";
import Title from "../Title/Titulo";
import Slider from "../Swiper/Swiper";

const Div = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 3rem;

     @media (max-width: 768px) {
         flex-direction: column;
     }
 `;

const Categoria = (props) => {
//pasamos props
    const { titulo, colorPrimario, descripcion } = props.datos;
    const { videos, eliminarVideo } = props;

    return <>

        {videos.length > 0 &&
            <section className="contenedor">

                <Title colorPrimario={colorPrimario} titulo={titulo} descripcion={descripcion} />
                <Div>
                    <Slider colorPrimario={colorPrimario} videos={videos} eliminarVideo={eliminarVideo}/>
                </Div>

            </section>
        }
    </>
}

export default Categoria;