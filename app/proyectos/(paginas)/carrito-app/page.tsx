import Link from 'next/link';
import style from '../../../portafolio/(paginas)/portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiBootstrap, SiJavascript, SiReact, SiStyledcomponents } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - Carrito App',
    description: 'Carrito App, desarrollo de proyecto front-end por Felipe Aguilar',
};

const PageCarrito = () => {

    const technologies = [
        {"icon": <SiJavascript />},
        {"icon": <SiReact />},
        {"icon": <SiStyledcomponents />},
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
                    <h1>Carrito</h1>
                    <span>Aplicación web</span>
                    <Image 
                        src={'/imagenes/CarritoApp.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, proyecto Tierra App'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            Proyecto sencillo realizado en curso de <b>React</b> para temas puntuales (principios de React).

                            <br /><br />

                            Funcionalidad sencilla de agregar al carrito con manejo de <b>Redux</b>. Rutas con <b>React Router</b>. Uso de <b>useState</b>.
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

                    <a href="https://carrito-de-compras-felipe-aguilar.netlify.app" target='_blank'>
                        Visitar proyecto 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageCarrito;