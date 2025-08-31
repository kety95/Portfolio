import Botoes from '../../Botoes'
import './CardProjeto.css'

export default function CardProjeto({img, titulo, desc, link1, link2}) {
    return (
        <div className="container-projeto">
            <img src={ img }/>
            <div className='right'>
                <h3>{ titulo }</h3>
                <p className='desc'>{ desc }</p>
                <Botoes link1={ link1 } link2={ link2 }/>
            </div>
        </div>
    )
}