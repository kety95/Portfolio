import './ExperienciaProfissional.css'
import CardProjeto from './CardProjeto'
import food_delivery_app from './img/food-delivery-app.svg'
import butra_img from './img/butra-img.svg'
import quarto_seguro from './img/quarto-seguro.svg'
import CardDash from './CardDash'

export default function ExperienciaProfissional() {
    return (
        <div className='container-experiencia-profissional'>
            <h1>Projetos</h1>
            <div className="experiencias">
                <CardProjeto
                    img={butra_img}
                    titulo='App de inscrição em atividades'
                    desc='Feito com React Native e Firebase'
                    link1='https://github.com/kety95/butra.com'
                />
                <CardProjeto
                    img={food_delivery_app}
                    titulo='App de delivery de comida'
                    desc='Feito com Ionic'
                    link1='https://github.com/kety95/Food-delivery'
                />
                <CardProjeto
                    img={quarto_seguro}
                    titulo='Site para reserva de hotel'
                    desc='Feito com HTML, CSS, Java, Servlet, Apache Tomcat, JSP, JDBC e MySQL'
                    link1='https://github.com/kety95/QuartoSeguro/blob/main/README.md'
                />
                <CardDash
                    media={
                        <iframe
                            title="Vendas"
                            className="dashboard-frame"
                            src="https://app.fabric.microsoft.com/view?r=eyJrIjoiZDQ4NmIzMGMtZmUxZC00MGYzLTk4ZWMtNGQ5MGUxZjAzNDUyIiwidCI6IjIxYzNkZmQ2LWI2ZjEtNGIwYS04N2U4LWM0YjAxNzU4MjExMCIsImMiOjR9"
                            allowFullScreen
                        />
                    }
                    titulo="Dashboard Vendas"
                    desc="Feito em Power BI"
                />
                <CardDash
                    media={
                        <iframe
                            title="Logística"
                            className="dashboard-frame"
                            src="https://app.fabric.microsoft.com/view?r=eyJrIjoiYWYwNDE5MzAtZjAxMy00MDBmLThmNzEtZmNhN2M4Y2NjOTM2IiwidCI6IjIxYzNkZmQ2LWI2ZjEtNGIwYS04N2U4LWM0YjAxNzU4MjExMCIsImMiOjR9"
                            allowFullScreen
                        />
                    }
                    titulo="Dashboard Logística"
                    desc="Feito em Power BI"
                />
            </div>
        </div>
    )
}