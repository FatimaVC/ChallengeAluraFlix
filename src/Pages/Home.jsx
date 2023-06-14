import Hero from "../Componets/Banner"
import Categoria from "../Componets/Categorias/Categoria";

const Home = ({ categorias, videos, eliminarVideo }) => {

    return <>
  
      <Hero />
  
      {categorias.map(categoria => {
  
        return <Categoria
          datos={categoria}
          key={categoria.titulo}
          videos={videos.filter(video => video.categoria === categoria.titulo)}
          eliminarVideo = {eliminarVideo}
        />
      })}
  
    </>
  }
  
  
  export default Home;