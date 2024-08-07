import './ExperienciaProfissional.css'
import CardExperiencia from './CardExperiencia'
import img_food_delivery_app from './img/food-delivery-app.svg'

export default function ExperienciaProfissional() {
    return (
        <div className='container-experiencia-profissional'>
            <h1>Experiência profissional</h1>
            <div className="experiencias">
                <CardExperiencia 
                    img={ img_food_delivery_app }
                    titulo='App de delivery de comida'
                    desc='Feito com Ionic'
                    link1='#'
                />
                <CardExperiencia 
                    img={ img_food_delivery_app }
                    titulo='App de delivery de comida'
                    desc='Feito com Ionic'
                    link2='#'
                />
            </div>
        </div>
    )
}