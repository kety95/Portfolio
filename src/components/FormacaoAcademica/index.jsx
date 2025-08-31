import CardFormacao from "./CardFormacao"
import './FormacaoAcademica.css'
import logoif from './img/logo-if.svg'
import logoalura from './img/logo-alura.svg'
import logounirioja from './img/logo-unirioja.svg'
import logoetec from './img/logo-etec.svg'

export default function FormacaoAcademica() {
    return (
        <div className="formacao-academica-container">
            <h1 className="titulo">Formação acadêmica</h1>
            <div className="formacoes">
                <CardFormacao img={ logoif } 
                    titulo='Análise e Desenvolvimento de Sistemas' 
                    termino='Em andamento - IFSP'/>
                 <CardFormacao img={ logounirioja } 
                    titulo='Intercâmbio, Espanha' 
                    termino='2025 - UNIRIOJA'/>
                <CardFormacao img={ logoalura } 
                    titulo='Formação Front End' 
                    termino='2024 - Alura'/>
                <CardFormacao img={ logoetec } 
                    titulo='Administração' 
                    termino='2021 - ETEC'/>              
            </div>
        </div>
    )
}