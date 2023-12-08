import Link from 'next/link';
import style from '../portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiBootstrap, SiFramer, SiJavascript, SiPostman, SiReact, SiSass, SiTypescript } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - Tarjet',
    description: 'Tarjet, desarrollo de aplicación web por Felipe Aguilar',
};

const PageYalogics = () => {

    const technologies = [
        {"icon": <SiJavascript />},
        {"icon": <SiTypescript />},
        {"icon": <SiReact />},
        {"icon": <SiSass />},
        {"icon": <SiBootstrap />},
        {"icon": <SiFramer />},
        {"icon": <SiPostman />},
    ]
    return ( 
        <div className={style.pagePortfolio}>
            <div className={style.Body}>

                <div className={style.btnReturn}>
                    <Link href='/portafolio'>
                        <BsArrowLeftShort />
                        Regresar
                    </Link>
                </div>

                <div className={style.Title}>
                    <h1>Tarjet</h1>
                    <span>Aplicación Web</span>
                    <Image 
                        src={'/imagenes/Tarjet.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, aplicación web Tarjet'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            <b>Tarjet &copy</b> plataforma de tarjetas digitales para empresas y/o profesionistas. Conecta con usuarios que estén interesados en tus servicios.
                        </p>
                        <br/>
                        <p>
                            Se desarrolló la aplicación web mediante un plan de trabajo extenso a largo plazo, cumpliendo con fases de desarrollo, actualizaciones y mantenimiento profundo de la plataforma. Tarjet todos los derechos reservados ©.
                            <br/>
                            <br />
                            Desarrollo de aplicación web con consumo de <b>APIs REST</b>, actualización de datos, manejo de <b>sesiones</b> y uso de <b>estados globales</b>.
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
                        10 meses, <span>Lanzado en 2023</span>
                    </p>

                    <div className='d-flex'>
                        <a href="https://tarjet.mx/" target='_blank'>
                            Visitar sitio 
                            <BsBoxArrowUpRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageYalogics;