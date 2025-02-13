
import Navbar from "./Navbar";
const Home = () => {
    return (
      <>
        <Navbar/>
        <div className="home">
        <div className="h1-text">
            <h1>Bienvenido a mi book</h1>
            <p>Explora nuestras imágenes y servicios.</p>
        </div>
        <br/>
        <span className="image-text">Has Click en la imagen para verlo en HD</span>
        <br/>
        <div className="image-gallery">
            <div className="im1 tall" >
            </div>
            <div className="im2 tall" />
            <div className="im3 tall" />
            <div className="im4 tall" />
            <div className="im5 tall" />
            <div className="im6 tall" />
            <div className="im7 tall" />
            <div className="im8 tall" />
            <div className="im9 tall" />
            <div className="im10 tall" />
            <div className="im11 tall" />
            <div className="im12 tall" />
            <div className="im13 tall" />
        </div>
      </div>
      
      </>
    );
  };
  
  export default Home;