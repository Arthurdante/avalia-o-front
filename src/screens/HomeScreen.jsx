import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './HomeScreen.css';


const flowersData = [
    {
      "id": 1,
      "name": "Flower One",
      "color": "Red",
      "image": "//picsum.photos/300/400",
      "ComoPlantar":"tatata",
    },
    {
      "id": 2,
      "name": "Flower Two",
      "color": "Blue",
      "image": "//picsum.photos/300/400",
      "ComoPlantar":"tetete",
    },
    {
        "id": 3,
        "name": "Flower 3",
        "color": "Blue",
        "image": "//picsum.photos/300/400",
        "ComoPlantar":"tetete",
    },
    {
      "id": 4,
      "name": "Flower 4",
      "color": "Blue",
      "image": "//picsum.photos/300/400",
      "ComoPlantar":"tetete",
    },
]
function Flowers() {
    const [flowers, setFlowers] = useState([]);

    function loadAllFlowers() {
      return flowersData;
    }

    function renderFlowers() {
      const allFlowers = loadAllFlowers();

      return allFlowers.map(flower => (
        <div key={flower.id}>
            <div className="text-center">
                <Link to={`Flor/${flower.id}`}>
                    <img  src={flower.image} alt=""/>
                    <h3>{flower.name}</h3>
                </Link>
                
            </div>
        </div>
      ));
    }

    useEffect(() => {
      function fetchFlowers() {
        const flowersToRender = renderFlowers();
        setFlowers(flowersToRender);
      }
      fetchFlowers();
    }, []);

    return (
      <div>
        <div className="lista-principal">
          {flowers}
        </div>
      </div>
    );
}





export default function HomeScreen() {
    
    return (
        <div>
            {/* Começa aqui o carrossel  */}
            <div id="carouselExample" className="carousel slide container">
                <div className="carousel-inner text-center">
                    <div >
                        <div className="carousel-item active">
                            <img src="//picsum.photos/1200/400" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="//picsum.photos/1200/400" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="//picsum.photos/1200/400" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* termina  aqui o carrossel  */}
            <div className="container">
                
                    <div className="col-12">
                        
                            <div>
                                {Flowers()}
                            </div>  
                        
                    </div>
                
            </div>
        </div>
    )
}