import Link from 'next/link';
import style from '../portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiGoogle, SiGoogleanalytics, SiSemrush, SiWordpress } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - South Dental',
    description: 'South Dental, desarrollo de ecommerce front-end por Felipe Aguilar',
};

const PageSouthDental = () => {

    const technologies = [
        {"icon": <SiWordpress />},
        {"icon": <SiGoogleanalytics />},
        {"icon": <SiSemrush />},
        {"icon": <SiGoogle />},
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
                    <h1>South Dental Center</h1>
                    <span>Sitio web y optimización SEO</span>
                    <Image 
                        src={'/imagenes/South.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, sitio web estático South Dental Center'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            <b>South Dental Center</b> centro clínico dental en México
                        </p>
                        <br/>
                        <p>
                            Tuve dos roles en este proyecto. Como mi primer rol fue desarrollar este sitio web desde cero en <b>Woordpress</b> dándole un gran diseño a todo el sitio y agregando formas de contacto mediante formularios totalmente funcionales.
                            <br /><br />
                            Como fui quien comenzó este proyecto desde cero, lo fui implementando con las optimizaciones pertinentes para el segundo rol que adquirí que fue la <b>optimización</b> e implementación de <b>SEO Técnico</b> del proyecto. 
                            <br /><br />
                            Se <b>indexó</b> el proyecto y se realizaron todos los pasos para tener el proyecto en <b>Google Analytics</b>, <b>Google Search Console</b>, entre otras herramientas para la optimización técnica de SEO del sitio. Constantemente con ayuda del equipo de CopyWriting se implementaba el contenido que correspondía con sus respectivas palabras claves para subir en posición SEO.
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
                        1 mes de desarrollo, 5 meses de SEO y SEO Técnico, <span>Lanzado en 2022</span>
                    </p>

                    <a href="https://southdentalmexico.com/" target='_blank'>
                        Visitar sitio 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageSouthDental;