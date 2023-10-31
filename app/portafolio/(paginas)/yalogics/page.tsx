import Link from 'next/link';
import style from '../portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiBootstrap, SiReact, SiSass } from "react-icons/si";
import Image from 'next/image';


const PageYalogics = () => {

    const technologies = [
        {"icon": <SiReact />},
        {"icon": <SiSass />},
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
                    <h1>Yalogics</h1>
                    <span>Sitio Web</span>
                    <Image 
                        src={'/imagenes/Yalogics.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, sitio web estático Dkassa'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            <b>Yalogics</b> agencia dedicada al desarrollo de tiendas online para pequeños y grandes negocios.
                        </p>
                        <br/>
                        <p>
                            Maqueté y diseñé el sitio web en <b>Figma</b> definiendo el estilo y paleta de colores. 
                            <br/>
                            <br />
                            Luego, procedí a desarrollar el sitio con <b>React Js</b>, para actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien. Se estableció una navegación a través de <b>React Router</b> y aplicando estilos mediante el uso de <b>SASS</b> y <b>Bootstrap</b> para asegurar una interfaz visualmente atractiva y funcional.
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
                        1 mes, <span>Lanzado en 2023</span>
                    </p>

                    <a href="https://yalogics.com/" target='_blank'>
                        Visitar sitio 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageYalogics;