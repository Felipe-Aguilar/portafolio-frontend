import Image from 'next/image';
import styles from './page.module.scss';
import Skills from '@/components/skills/Skills';

export default function Home() {

  const experience = [
    {company: 'TekRobot', title: 'Desarrollador Front-End', date: 'Jun/22 - Presente', description: 'Desarrollo de aplicaciones web CSR, SSR y consumo de servicios web.'},
    {company: 'Auténtico SEO', title: 'Desarrollador Web y SEO Técnico', date: 'May/21 - Jun/22', description: 'Desarrollo de Ecommerce, optimización e implementación SEO.'},
  ]

  return (
    <main className={styles.main}>
      <div className={styles.body}>

        <span className={styles.subtitle}>
          <span>•</span> Acerca de mí
        </span>

        <h1>
          Hola, soy Felipe Aguilar! Desarrollador Front-End
        </h1>

        <div className={styles.container}>
          <div>
            <div className={styles.image}>
              <Image 
                src={'/imagenes/personal-graduacion.webp'}
                width={3000}
                height={4000}
                alt='Fotografía con de mi recibimiento de título'
              />
            </div>
            <p className={styles.firstText}>
              Disfruto mucho de todo aquello que me apasiona, como lo es la música y mi trabajo como desarrollador. <br /><br /> Logrando desempeñarme de forma increíble disfrutando mi vida laboral y personal que se complementan cada una de ellas.
            </p>
            <p className={styles.secondText}>
              <b>Ingeniero en Informática</b> graduado de la <b>Universidad Politécnica del Valle de México</b> con más de 2 años de experiencia especializado en desarrollo Front-End. 
              <br /> <br/>
              Cuento con experiencia en el desarrollo de todo tipo de proyectos web, desde aplicaciones simples hasta complejos sitios web de comercio electrónico.
              <br /><br />
              También tengo experiencia en el posicionamiento SEO de sitios web, lo que me permite que también sean bien posicionados en los motores de búsqueda.
            </p>
          </div>

          <div>
            <p className={styles.firstText}>
              <b>Ingeniero en Informática</b> graduado de la <b>Universidad Politécnica del Valle de México</b> con más de 2 años de experiencia especializado en desarrollo Front-End. 
              <br /> <br/>
              Cuento con experiencia en el desarrollo de todo tipo de proyectos web, desde aplicaciones simples hasta complejos sitios web de comercio electrónico.
              <br /><br />
              También tengo experiencia en el posicionamiento SEO de sitios web, lo que me permite que también sean bien posicionados en los motores de búsqueda.
            </p>

            <div className={styles.image}>
              <Image 
                src={'/imagenes/personal-personal.webp'}
                width={1200}
                height={1600}
                alt='Fotografía con de mi en un festival'
              />
            </div>
            
            <p className={styles.secondText}>
              Disfruto mucho de todo aquello que me apasiona, como lo es la música y mi trabajo como desarrollador. <br /><br /> Logrando desempeñarme de forma increíble disfrutando mi vida laboral y personal que se complementan cada una de ellas.
            </p>
          </div>
        </div>

        <Skills />

        <div className={styles.experience}>
          <span className={styles.subtitle}>
            <span>•</span> Experiencia
          </span>

          <div className={styles.experienceBody}>
            { experience.map((job)=>(
              <div className={styles.experienceContainer} key={job.company}>
                <h2>{job.company}</h2>

                <div>
                  <h3>{job.title}</h3>
                  <span>{job.date}</span>
                  <p>
                    {job.description}
                  </p>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
