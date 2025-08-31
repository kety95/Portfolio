import Botao from "../Botao";
import './Botoes.css'

export default function Botoes({ link1, link2 }) {
    return (
        <span className="botoes">
            <Botao link={ link1 } claro>Repositório</Botao>
            {link2 && (
                <Botao link={link2}>Ver demo</Botao>
            )}
        </span>
    )
}