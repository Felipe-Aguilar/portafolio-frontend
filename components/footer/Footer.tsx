import { BsFileEarmarkPersonFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import style from './footer.module.scss';

const Footer = () => {
    return ( 
        <footer className={style.Footer}>
            <p>Desarrollado por Felipe Aguilar | 2023</p>

            <div className={style.iconsSocial}>
                <a href="https://www.linkedin.com/in/felipe-aguilar-333996211/" target='_blank'>
                    <BsLinkedin />
                </a>
                <a href="https://github.com/Felipe-Aguilar" target='_blank'>
                    <BsGithub />
                </a>
                <a href="" target='_blank'>
                    <BsFileEarmarkPersonFill />
                </a>
            </div>
        </footer>
    );
}

export default Footer;