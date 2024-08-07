import CardFormacao from "./CardFormacao"
import './FormacaoAcademica.css'
import logoif from './img/logo-if.svg'
import logoalura from './img/logo-alura.svg'

export default function FormacaoAcademica() {
    return (
        <div className="formacao-academica-container">
            <h1 className="titulo">Formação acadêmica</h1>
            <div className="formacoes">
                <CardFormacao img={ logoif } 
                    titulo='Análise e Desenvolvimento de Sistemas' 
                    termino='Em andamento - IFSP'/>
                <CardFormacao img={ logoalura } 
                    titulo='Formação Front End' 
                    termino='2024 - Alura'/>
            </div>
        </div>
    )
}