import Botoes from '../../Botoes'
import './CardExperiencia.css'

export default function CardExperiencia({img, titulo, desc, link1, link2}) {
    return (
        <div className="container-experiencia">
            <img src={ img }/>
            <div className='right'>
                <h3>{ titulo }</h3>
                <p>{ desc }</p>
                <Botoes link1={ link1 } link2={ link2 }/>
            </div>
        </div>
    )
}