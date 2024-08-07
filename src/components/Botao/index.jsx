import './Botao.css'
export default function Botao({ link, children ='Enviar mensagem', claro }) {
    return (
        <a className={`btn ${claro === true ? 'claro' : 'escuro'}`} href={ link }>{ children }</a>
    )
}