import Link from 'next/link';
import style from '../portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiBootstrap, SiElementor, SiWordpress } from "react-icons/si";
import Image from 'next/image';


const PageCigars = () => {

    const technologies = [
        {"icon": <SiWordpress />},
        {"icon": <SiElementor />},
        {"icon": <SiBootstrap />},
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
                    <h1>Cigars & Luxury</h1>
                    <span>Ecommerce</span>
                    <Image 
                        src={'/imagenes/Cigars.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, sitio web estático Cigars & Luxury'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            <b>Cigars & Luxury</b> venta de habanos en México.
                        </p>
                        <br/>
                        <p>
                            Se desarrolló este Ecommerce con un <b>CMS</b>. Dando un estilo y diseño elegante, implementando <b>métodos de envío</b> a toda la república mexicana. Se agregó una <b>pasarela de pagos</b> con Mercado Libre.
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
                        3 meses, <span>Lanzado en 2022</span>
                    </p>

                    <a href="https://cigarsandluxury.com/" target='_blank'>
                        Visitar sitio 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageCigars;