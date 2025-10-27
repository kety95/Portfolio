import Banner from '../../components/Banner'
import Cabecalho from '../../components/Cabecalho'
import Container from '../../components/Container'
import Habilidades from '../../components/Habilidades'
import SobreMim from '../../components/SobreMim'
import Rodape from '../../components/Rodape'
import FormacaoAcademica from '../../components/FormacaoAcademica'
import { DiMysql } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { BsFiletypeCss } from "react-icons/bs";
import { LiaJava } from "react-icons/lia";
import { MdOutlineSkateboarding } from "react-icons/md";
import { FaGuitar } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { SiPowerbi } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { GrYoga } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import ExperienciaProfissional from '../../components/ExperienciaProfissional'


export default function Inicio() {
    const habilidades = [
        { icon: <FaHtml5 />, nome: 'Html 5' },
        { icon: <RiJavascriptFill />, nome: 'Javascript' },
        { icon: <RiReactjsLine />, nome: 'React' },
        { icon: <BsFiletypeCss />, nome: 'CSS' },
        { icon: <LiaJava />, nome: 'Java' },
        { icon: <SiPowerbi />, nome: 'Power BI' },
        { icon: <DiMysql />, nome: 'SQL' },
        { icon: <SiPostman />, nome: 'Postman' }
    ]

    const hobbies = [
        { icon: <MdOutlineSkateboarding />, nome: 'Skate' },
        { icon: <FaGuitar />, nome: 'Ukulele' },
        { icon: <FaPaintbrush />, nome: 'Pintura' },
        { icon: <TfiWrite />, nome: 'Escrita Criativa' },
        { icon: <GrYoga />, nome: 'Yoga' }
    ]

    return (
        <>
            <Container>
                <Cabecalho />
                <Banner />
            </Container>
            <section id="sobre">
                <SobreMim />
            </section>
            <section id="skills">
                <Habilidades habilidades={habilidades} titulo={'Skills'} />
            </section>
            <section id="hobbies">
                <Habilidades habilidades={hobbies} titulo={'Hobbies'} />
            </section>
            <section id="formacao">
                <FormacaoAcademica />
            </section>
            <section id="experiencia">
                <ExperienciaProfissional />
            </section>
            <Rodape />
        </>
    )
}