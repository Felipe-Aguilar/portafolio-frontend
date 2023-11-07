import Link from 'next/link';
import style from '../../../portafolio/(paginas)/portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiJavascript, SiReact, SiStyledcomponents } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - Tierra App',
    description: 'Tierra App, desarrollo de proyecto front-end por Felipe Aguilar',
};

const PageTierra = () => {

    const technologies = [
        {"icon": <SiJavascript />},
        {"icon": <SiReact />},
        {"icon": <SiStyledcomponents />},
    ]
    return ( 
        <div className={style.pagePortfolio}>
            <div className={style.Body}>

                <div className={style.btnReturn}>
                    <Link href='/proyectos'>
                        <BsArrowLeftShort />
                        Regresar
                    </Link>
                </div>

                <div className={style.Title}>
                    <h1>Tierra App</h1>
                    <span>Aplicación web</span>
                    <Image 
                        src={'/imagenes/TierraApp.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, proyecto Tierra App'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            Proyecto personal con el único fin de poner en práctica algunos conceptos de <b>React</b>.
                            <br /><br />
                            Uso de <b>React Router</b> y <b>Styled Components</b>. Uso de animaciones con <b>Framer Motion</b>.
                        </p>
                    </div>
                </div>

                <div className={style.Technologies}>
                    <h3>Tecnologías</h3>

                    <div className={style.Icons}>
                        {technologies.map((technology)=>
                            <>
                                {technology.icon} 
                            </>
                        )}
                    </div>
                </div>

                <div className={style.Cronogram}>
                    <h3>Cronograma</h3>
                    <p>
                        <span>Realizado en 2022</span>
                    </p>

                    <a href="https://tierra-app-felipe-aguilar.netlify.app/sistemaSolar" target='_blank'>
                        Visitar proyecto 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageTierra;