import Link from 'next/link';
import style from './style.module.scss';
import { BsFileEarmarkPersonFill, BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
    return ( 
        <div className={style.Header}>

            <div className={style.Logo}>
                <h2>Felipe Aguilar</h2>
                <span>Front-End Developer</span>
            </div>

            <div className={style.Navigation}>
                <nav>
                    <Link href={'/'}>
                        Info
                    </Link>
                    <Link href={'/portafolio'}>
                        Portafolio
                    </Link>
                    <Link href={'/proyectos'}>
                        Proyectos
                    </Link>
                </nav>
            </div>

            <div className={style.Social}>
                <a href="https://www.linkedin.com/in/felipe-aguilar-333996211/" target='_blank'>
                    <BsLinkedin />
                </a>
                <a href="https://github.com/Felipe-Aguilar" target='_blank'>
                    <BsGithub />
                </a>
                <a href="https://drive.google.com/file/d/1xUeeZ1kqYH6imGHiiWOBZVTwg6KiBC0w/view?usp=sharing" target='_blank'>
                    <BsFileEarmarkPersonFill />
                </a>
            </div>

        </div>
    );
}

export default Header;