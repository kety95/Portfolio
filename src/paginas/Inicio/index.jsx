import Banner from '../../components/Banner'
import Cabecalho from '../../components/Cabecalho'
import Container from '../../components/Container'
import Habilidades from '../../components/Habilidades'
import SobreMim from '../../components/SobreMim'
import Rodape from '../../components/Rodape'
import FormacaoAcademica from '../../components/FormacaoAcademica'
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { BsFiletypeCss } from "react-icons/bs";
import { LiaJava } from "react-icons/lia";
import { MdOutlineSkateboarding } from "react-icons/md";
import { FaGuitar } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { SiPowerbi } from "react-icons/si";
import ExperienciaProfissional from '../../components/ExperienciaProfissional'


export default function Inicio () {
    const habilidades = [
        {icon: <FaHtml5 />, nome: 'Html 5'},
        {icon: <RiJavascriptFill />, nome: 'Javascript'},
        {icon: <RiReactjsLine />, nome: 'React'},
        {icon: <BsFiletypeCss />, nome: 'CSS'},
        {icon: <LiaJava />, nome: 'Java'},
        {icon: <SiPowerbi />, nome: 'Power BI'}
    ]

    const hobbies = [
        {icon: <MdOutlineSkateboarding />, nome: 'Andar de skate'},
        {icon: <FaGuitar />, nome: 'Tocar ukulele'},
        {icon: <FaPaintbrush />, nome: 'Pintar telas'},
    ]

    return (
        <>
            <Container>
                <Cabecalho/>
                <Banner/>
            </Container>
            <SobreMim/>
            <Habilidades habilidades={ habilidades } titulo={'Skills'}/>
            <Habilidades habilidades={ hobbies } titulo={'Hobbies'}/>
            <FormacaoAcademica/>
            <ExperienciaProfissional/>
            <Rodape/>
        </>
    )
}