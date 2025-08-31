import './CardDash.css'

export default function CardDash({ media, titulo, desc }) {
    return (
        <div className="container-dash">
            <div className="media">
                {media}
            </div>

            <div className='right'>
                <h3>{titulo}</h3>
                <p className='desc'>{desc}</p>
            </div>
        </div>
    )
}