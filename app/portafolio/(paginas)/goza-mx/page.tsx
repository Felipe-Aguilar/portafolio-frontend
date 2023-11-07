import Link from 'next/link';
import style from '../portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiMicrosoftsqlserver, SiMysql, SiPhp, SiWordpress } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - Goza Mx',
    description: 'Goza Mx, desarrollo de ecommerce front-end por Felipe Aguilar',
};

const PageGozaMx = () => {

    const technologies = [
        {"icon": <SiWordpress />},
        {"icon": <SiPhp />},
        {"icon": <SiMysql />},
        {"icon": <SiMicrosoftsqlserver />}
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
                    <h1>Goza Mx</h1>
                    <span>Ecommerce</span>
                    <Image 
                        src={'/imagenes/Goza.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo de Ecommerce, proyecto Goza Mx'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            <b>Goza Mx</b> empresa 100% mexicana que diseña, fabrica y comercializa ropa para dama, enfocada en alto glamour.
                        </p>
                        <br />
                        <p>
                            Mi función principal fue <b>diseñar</b> y <b>desarrollar</b> un sitio de comercio electrónico con un sistema de gestión de contenidos <b>(CMS)</b>. 
                        </p>
                        <br/>
                        <p>
                            Implementé distintos <b>plugins</b> clave, como vistas dinámicas <b>para variaciones de producto</b>, como color y talla, una <b>galería</b> con función de zoom, así como la integración de una <b>API para envíos</b> en toda la República Mexicana y <b>pasarelas de pago</b> con Mercado Pago y PayPal. 
                        </p>
                        <br/>   
                        <p>
                            Además, establecí una <b>conexión entre la base de datos del punto de venta de la tienda y el CMS</b> para garantizar un seguimiento en tiempo real del inventario y evitar problemas de sobreventa o falta de productos.
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
                        3 meses, <span>Lanzado en 2023</span>
                    </p>

                    <a href="https://gozamx.com/" target='_blank'>
                        Visitar sitio 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageGozaMx;