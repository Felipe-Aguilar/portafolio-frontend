import Link from 'next/link';
import style from '../portafolio/portafolio.module.scss';
import { BsArrowRightCircle } from 'react-icons/bs';
import Image from 'next/image';

interface propsProyect {
    name: string,
    subTitle: string,
    link: string,
    image: string
}


const PageProyectos = () => {

    const Proyectos: propsProyect[] = [
        {name: 'Reto CIID', subTitle: 'Mini proyecto de noticias con conexión a una REST API', link: '/reto-ciid', image: '/imagenes/RetoCIID.webp'},
        {name: 'ERP Autos el Angel de Puebla', subTitle: 'Cascaron de ERP de compañía de Venta de Autos en Puebla.', link: '/erp-autos', image: '/imagenes/ErpAutos.webp'},
        {name: 'Tierra App', subTitle: 'Proyecto con la finalidad de poner en práctica funcionalidades y animaciones en React', link: '/tierra-app', image: '/imagenes/TierraApp.webp'},
        {name: 'Carrito App', subTitle: 'Proyecto con uso de Hooks y Librerías, principios de React', link: '/carrito-app', image: '/imagenes/CarritoApp.webp'}
    ]

    return ( 
        <div className={style.Portafolio}>
            <div className={style.Body}>

                { Proyectos.map((proyecto)=>(
                    
                    <div className={style.Container} key={proyecto.name}>
                        <Link href={proyecto.link} className={style.Container2}>
                            <div className={style.Title}>
                                <div>
                                    <h2>{proyecto.name}</h2>
                                    <span>{proyecto.subTitle}</span>
                                </div>

                                <BsArrowRightCircle />
                            </div>

                            <div className={style.Image}>
                                <Image 
                                    src={proyecto.image}
                                    width={1920}
                                    height={1080}
                                    alt='Imagen demostrativa de proyecto portafolio'
                                />
                            </div>
                        </Link>
                    </div>
                ))
                }

            </div>
        </div>
    );
}

export default PageProyectos;