'use client';

import styles from './skills.module.scss';
import 'react-tooltip/dist/react-tooltip.css';
import { SiBootstrap, SiCss3, SiFigma, SiGit, SiGoogle, SiHtml5, SiJavascript, SiMicrosoftsqlserver, SiMysql, SiNextdotjs, SiPostgresql, SiReact, SiSass, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const Skills = () => {

    const Skills = [
        {name: 'JavaScript', icon: <SiJavascript />},
        {name: 'TypeScript', icon: <SiTypescript />},
        {name: 'React', icon: <SiReact />},
        {name: 'NextJs', icon: <SiNextdotjs />},
        {name: 'PostgresSQL', icon: <SiPostgresql />},
        {name: 'MySQL', icon: <SiMysql />},
        {name: 'SQL Server', icon: <SiMicrosoftsqlserver />},
        {name: 'HTML5', icon: <SiHtml5 />},
        {name: 'CSS3', icon: <SiCss3 />},
        {name: 'Sass', icon: <SiSass />},
        {name: 'Bootstrap', icon: <SiBootstrap />},
        {name: 'Figma', icon: <SiFigma />},
        {name: 'Git', icon: <SiGit />},
        {name: 'Google Cloud Platform', icon: <SiGoogle />},
    ]

    const propsAnimation = {
        initial: {opacity: 0},
        viewport: {once: true},
    }

    return ( 
        <div className={styles.skills}>
            <span className={styles.subtitle}>
                <span>•</span> Skills
            </span>

            <div className={styles.icons}>
                { Skills.map((skill, index)=>(
                    <motion.div 
                        key={skill.name}
                        {...propsAnimation}
                        whileInView={{opacity: 1}}
                        transition={{delay: index * 0.2}}
                        data-tooltip-id='my-tooltip'
                        data-tooltip-content={skill.name}
                        data-tooltip-place="top"
                    >
                        {skill.icon}
                        <Tooltip id="my-tooltip" />
                    </motion.div>
                ))
                }
            </div>
        </div>
    );
}

export default Skills;