
import { useParams } from 'react-router-dom';

const flowersData = [
    {
        "id": 1,
        "name": "Flower One",
        "color": "Red",
        "image": "//picsum.photos/300/400",
        "ComoPlantar": "tatata",
    },
    {
        "id": 2,
        "name": "Flower Two",
        "color": "Blue",
        "image": "//picsum.photos/300/400",
        "ComoPlantar": "tetete",
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
];



export default function FlorScreen() {

    const { id } = useParams();

    // Use o ID para carregar os detalhes da flor (você pode buscar dados do servidor ou de um array local)
    const flor = flowersData.find((flor) => flor.id === parseInt(id, 10));
    // Renderize as informações da flor
    return (
        <div className='container'>
            <h2>Detalhes da Flor</h2>
            <div>
                <img src={flor.image} alt='' />
            </div>
            <div>
                <h3>Nome: {flor.name}</h3>
                <p>Como Plantar: {flor.ComoPlantar}</p>
            </div>
        </div>
    );
}