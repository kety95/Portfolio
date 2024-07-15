import './Habilidades.css'
import CardHabilidade from "./CardHabilidade";

export default function Habilidades ({ habilidades, titulo }) {

    return (
        <div className='habilidades-container'>
            <h1>{ titulo }</h1>
            <div className='listagem'>
                {habilidades.map((habilidade) => (
                    <CardHabilidade key={habilidade.nome} icon={habilidade.icon} habilidade={habilidade.nome}/>
                    )
                )}
            </div>
        </div>
    )
}