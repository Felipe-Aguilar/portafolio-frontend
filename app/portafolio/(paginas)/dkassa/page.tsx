import Link from 'next/link';
import style from '../portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiBootstrap, SiWoocommerce, SiWordpress } from "react-icons/si";
import Image from 'next/image';

export const metadata = {
    title: 'Felipe Aguilar - Dkassa',
    description: 'Dkassa, desarrollo de ecommerce front-end por Felipe Aguilar',
};

const PageDkassa = () => {

    const technologies = [
        {"icon": <SiWordpress />},
        {"icon": <SiWoocommerce />},
        {"icon": <SiBootstrap />}
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
                    <h1>Dkassa</h1>
                    <span>Ecommerce</span>
                    <Image 
                        src={'/imagenes/Dkassa.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, sitio web estático Dkassa'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            <b>Dkassa</b> empresa mexicana dedicada a la venta de muebles en Monterrey, México.
                        </p>
                        <br/>
                        <p>
                            Retomé este proyecto realizado con un <b>(CMS)</b>, <b>optimizando</b> y <b>mejorando</b> el diseño de este Ecommerce, como también su <b>rendimiento</b>, optimizando el uso de plugins necesarios. 
                            <br /><br />
                            Al ser una empresa que vende productos premium fue necesario realizar una correcta optimización en imágenes, ya que la calidad de sus productos es alta y era necesario una buena calidad de imagen en su catálogo de productos. Definir y <b>programar</b> toda la parte de <b>descuentos</b> por temporada y <b>cupones</b>.
                            <br /><br />
                            Se implementó <b>pasarela de pagos</b> con <b>OpenPay</b>
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
                        5 meses, <span>Lanzado en 2022</span>
                    </p>

                    <a href="https://dkassa.com.mx/" target='_blank'>
                        Visitar sitio 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageDkassa;