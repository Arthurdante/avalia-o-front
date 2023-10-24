import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark-subtle">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <h4>Flori Cultura</h4>
                        <p>2023 - Todos os direitos reservados</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Temas Parecidos</h4>
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="https://pt.wikipedia.org/wiki/Abelha">Abelhas</Link></li>
                            <li className="list-group-item"><Link to="https://www.gov.br/cnpq/pt-br/assuntos/noticias/pesquisa-do-dia/a-flora-do-brasil-2020-lanca-seus-dados">Flora</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}