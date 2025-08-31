import styles from './Banner.module.css'
import MinhaImagem from '../../assets/foto.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function Banner() {
    return (
        <div className={styles.banner_container}>
            <div className={styles.esquerda}>
                <h1 className={styles.esquerda_h1}>Olá, meu nome é Ketlyn Campos e construo páginas web</h1>
                <p className={styles.esquerda_p}>Sou estudante de Análise e Desenvolvimento de Sistemas e participo no projeto Oracle ONE na Alura.</p>
                <ul className={styles.itens}>
                    <lii><a className={styles.itens_li_a} href="https://github.com/kety95">Github <MdArrowOutward /></a></lii>
                    <lii><a className={styles.itens_li_a} href="https://www.instagram.com/_ketlynmoraes_/">Instagram <MdArrowOutward /></a></lii>
                    <lii><a className={styles.itens_li_a} href="https://www.linkedin.com/in/ketlyn-moraes-campos-73b4b11b4/">Linkedin <MdArrowOutward /></a></lii>
                </ul>
            </div>
            <div className={styles.direita}>
                <img className={styles.direita_img} src={ MinhaImagem } alt="foto Ketlyn"/>
            </div>
        </div>
    )
}