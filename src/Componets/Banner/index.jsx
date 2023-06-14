import styled from "styled-components";
import banner from "../../assets/img/banner.png";
import imagenBanner from "../../assets/img/imagen-banner.png";

const HeroBanner = styled.div`
  //inyectamos a hero (imagen) como background
  background-image: url(${banner});
  background-repeat: no-repeat;
  width: 100%;
  height: 70rem;
  background-position: center;
  position: relative;

  @media (min-width: 1200px) {
    height: 90rem;
  }

  @media (max-width: 480px) {
    height: 55rem;
  }
`;

const ContenidoHero = styled.div`
  position: absolute;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5893009303330707) 35%,
    rgba(0, 0, 0, 1) 90%,
    rgba(27, 27, 27, 1) 100%
  );
  width: 100%;
  height: 100%;
  padding: 0 6rem 12.5rem 6rem;
  display: flex;
  align-items: flex-end;
`;

const ContenidoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Subtitulo = styled.h2`
    max-width: 100%;
    color: #fff;
    font-size: 4rem;

    @media (max-width: 1035px) {
        font-size: 2.5rem;
    }
    `;

const Parrafo = styled.p`
    max-width: 100%;
    color: #fff;
    font-size: 1.8rem;

    @media (max-width: 1035px) {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        display: none
    }
    `;

const Hero = () => {
    return (
      <HeroBanner>
        <ContenidoHero>
            <ContenidoHeader>
                <div>
                     <Subtitulo> Challenge React</Subtitulo>
                
                     <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>

                </div>
                <a href="https://www.youtube.com/watch?v=ov7vA5HFe6w" target="blank" style={{ width: '100%' }}>
                        <img src={imagenBanner} alt="Miniatura video" />
                </a>

            </ContenidoHeader>

        </ContenidoHero>

      </HeroBanner>
    );
  };
  
export default Hero;
