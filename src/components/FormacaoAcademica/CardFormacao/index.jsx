import './CardFormacao.css'

export default function CardFormacao({ img, titulo, termino }) {
    return (
        <div className='card-formacao-container'>
            <img src={ img }/>
            <h2>{ titulo }</h2>
            <p>{ termino }</p>
        </div>
    )
}