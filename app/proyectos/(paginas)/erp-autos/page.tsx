import Link from 'next/link';
import style from '../../../portafolio/(paginas)/portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiJavascript, SiReact, SiSass, SiTypescript, SiVite } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - ERP Autos',
    description: 'ERP Autos, desarrollo de proyecto front-end por Felipe Aguilar',
};

const PageErp = () => {

    const technologies = [
        {"icon": <SiJavascript />},
        {"icon": <SiTypescript />},
        {"icon": <SiReact />},
        {"icon": <SiVite />},
        {"icon": <SiSass />},
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
                    <h1>Autos el Angel</h1>
                    <span>ERP</span>
                    <Image 
                        src={'/imagenes/ErpAutos.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, proyecto ERP Autos'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            Maquetado de un ERP para <b>Autos el Angel de puebla</b>.
                        </p>
                        <br/>
                        <p>
                            Proyecto realizado con <b>Vite (React)</b>, pensado para usar servicios web <b>API REST</b> para consumo e intercambio de información con el lado del servidor.
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
                        <span>Pausado</span>
                    </p>

                    <a href="https://tek-robot-autos-angel.netlify.app/" target='_blank'>
                        Visitar proyecto 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageErp;