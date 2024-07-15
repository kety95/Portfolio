import './Cabecalho.css'
export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <nav>
                <span><img src="star.svg" alt="ícone de estrela" />Ketlyn Campos</span>
                <ul className='itens'>
                    <li>Sobre mim</li>
                    <li>Skills</li>
                    <li>Hobbies</li>
                    <li>Formação</li>
                    <li>Projetos</li>
                    <li className='email'>ketlynmoraes95@gmail.com</li>
                </ul>
            </nav>
        </header>
    )
}