import Link from 'next/link';
import style from '../../../portafolio/(paginas)/portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiBootstrap, SiJavascript, SiReact, SiSass } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - Reto CIID',
    description: 'Reto CIID, desarrollo de proyecto front-end por Felipe Aguilar',
};

const PageReto = () => {

    const technologies = [
        {"icon": <SiJavascript />},
        {"icon": <SiReact />},
        {"icon": <SiSass />},
        {"icon": <SiBootstrap />},
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
                    <h1>Reto CIID</h1>
                    <span>Prueba técnica</span>
                    <Image 
                        src={'/imagenes/RetoCIID.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, sitio web estático South Dental Center'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            Conectarse a la API de microsoft azure, bing news y desarrollar el front responsivo en tres resoluciones(smartphone, tablet, desktop), usando react.js que muestre un listado de noticias del día actual con:
                        </p>
                        <ul>
                            <li>Fotografía de la noticia</li>
                            <li>Título</li>
                            <li>Dos líneas del contenido de la noticia</li>
                            <li>Fecha de la noticia</li>
                        </ul>
                        <p>
                            Y proporcionar los siguientes filtros:
                        </p>
                        <ul>
                            <li>Listado de noticias con noticias de la semana más reciente, solo sobre el mundo de la economía digita</li>
                            <li>Listado de noticias con noticias de la semana más reciente, solo sobre entretenimiento</li>
                            <li>Listado de noticias con noticias de la semana más reciente, solo sobre negocios</li>
                        </ul>
                        <p>
                            Para este reto se utilizaron Hooks como: <b>useState</b> y <b>useContext</b>. Y conexión a <b>API de microsoft Azure mediante fecth</b>.
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
                        <span>Realizado en 2023</span>
                    </p>

                    <a href="https://reto-ciid-felipe-aguilar-v2.netlify.app/" target='_blank'>
                        Visitar proyecto 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageReto;