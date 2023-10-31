import Link from 'next/link';
import style from '../portfolio.pages.module.scss';
import { BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs';
import { SiGoogle, SiGoogleanalytics, SiSemrush, SiWordpress } from "react-icons/si";
import Image from 'next/image';


const PageBabel = () => {

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
                    <h1>Babel Traductores</h1>
                    <span>Sitio web</span>
                    <Image 
                        src={'/imagenes/Babel.webp'}
                        width={1920}
                        height={1080}
                        alt='Desarrollo front-end, sitio web estático South Dental Center'
                    />
                </div>

                <div className={style.Description}>
                    <div>
                        <h2>Descripción General</h2>
                        <p>
                            <b>Babel traductores</b> traducciones para eventos y documentos en Monterrey, México.
                        </p>
                        <br/>
                        <p>
                            Un proyecto muy poco usual, con un diseño totalmente extravagante. El cliente solicitó un sitio web poco usual, dándonos diferentes conceptos e ideas y se optó por constuír este sitio con un <b>scroll de forma horizontal</b>, dando un resultado satisfactorio e impresionante.
                            <br /><br />
                            Además del desarrollo de este sitio web, se realizó su respectiva <b>optimización</b> y <b>SEO Técnico</b> para su posicionamiento en los motores de búsqueda.
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

                    <a href="https://babeltraductores.com.mx/" target='_blank'>
                        Visitar sitio 
                        <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageBabel;