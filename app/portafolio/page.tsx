import Link from 'next/link';
import style from './portafolio.module.scss';
import { BsArrowRightCircle } from 'react-icons/bs';
import Image from 'next/image';

interface propsProyect {
    name: string,
    subTitle: string,
    link: string,
    image: string
}

const PagePortafolio = () => {

    const Proyectos: propsProyect[] = [
        {name: 'Goza Mx', subTitle: 'Desarrollo de Ecommerce para venta de ropa de dama.', link: '/goza-mx', image: '/imagenes/Goza.webp'},
        {name: 'Yalogics', subTitle: 'Sitio web estático para empresa dedicada a desarrollos web en general', link: '/yalogics', image: '/imagenes/Yalogics.webp'},
        {name: 'Dkassa', subTitle: 'Ecommerce para venta de muebles en Monterrey, México', link: '/dkassa', image: '/imagenes/Dkassa.webp'},
        {name: 'South Dental', subTitle: 'Desarrollo de sitio web para una clínica especializada en odontología para toda la familia.', link: '/south-dental', image: '/imagenes/South.webp'},
        {name: 'Cigars & Luxury', subTitle: 'Ecommerce para venta de habanos en México', link: '/cigars-luxury', image: '/imagenes/Cigars.webp'},
        {name: 'Babel Traductores', subTitle: 'Desarrollo web con un diseño totalmente inusual. Servicios de Traducción de documentos, eventos y conferencias en Monterrey, México', link: '/babel-traductores', image: '/imagenes/Babel.webp'},
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

export default PagePortafolio;