import './CardHabilidade.css'

export default function CardHabilidade({ icon, habilidade }) {
    return (
        <div className='habilidade-container'>
            <span>{ icon }</span>
            <h6>{ habilidade }</h6>
        </div>
    )
}