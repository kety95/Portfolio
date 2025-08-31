import './Cabecalho.css'
export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <nav>
                <span><img src="star.svg" alt="ícone de estrela" />Ketlyn Campos</span>
                <ul className='itens'>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#formacao">Formação</a></li>
                    <li><a href="#experiencia">Projetos</a></li>
                    <li className='email'>ketlynmoraes95@gmail.com</li>
                </ul>
            </nav>
        </header>
    )
}