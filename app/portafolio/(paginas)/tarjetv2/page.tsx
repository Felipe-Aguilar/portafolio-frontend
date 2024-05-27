import Link from 'next/link';
import style from '../portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiBootstrap, SiFramer, SiGoogle, SiNextdotjs, SiPostman, SiReact, SiSass, SiTypescript } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - Tarjet',
    description: 'Tarjet, desarrollo de aplicación web por Felipe Aguilar',
};

const PageYalogics = () => {

    const technologies = [
        {"icon": <SiTypescript />},
        {"icon": <SiReact />},
        {"icon": <SiNextdotjs />},
        {"icon": <SiGoogle />},
        {"icon": <SiSass />},
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
                    <h1>Tarjet versión 2</h1>
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
                            <b>Tarjet</b> plataforma de tarjetas digitales para empresas y/o profesionistas. Conecta con usuarios que estén interesados en tus servicios.
                        </p>
                        <br/>
                        <p>
                            Actualización de plataforma a <b>Next Js 14</b>, nuevo sistema de rutas con <b>App Router</b>, manejo de <b>CSR</b> y <b>SSR</b>, menejo de sesiones con <b>Next Auth</b> y uso de herramientas de <b>Google Cloud Platform</b>.
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
                        10 meses, <span>Lanzado en 2023</span> - Actualización en 2024
                    </p>

                    <div className='d-flex'>
                        <a href="https://tarjet.site/" target='_blank'>
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