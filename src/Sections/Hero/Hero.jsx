import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/prameela-mam.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
//import Resume from '../../assets/pruthwik_gowda (5).pdf'
import { useTheme } from '../../Common/ThemeContext'

const Hero = () => {

    const { theme, toggleTheme } = useTheme();


    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

    return (
        <section id="section0" className={styles.container}>
            
            <div className={styles.info}>
                <h1>
                    Prameela R
                </h1>
                <p>
                    Assistent Professor, Dept. of ISE, BIT
                </p>
                {/* <span className={styles.details}> */}
                    <p>Email - rprameela05@gmail.com</p>
                    <p>Email - prameelarudra@bit-bangalore.edu.in </p>
                    <p>Years of Experience - 13</p>
                    <p>Contact - +91 96116 41640</p>
                {/* </span> */}
                {/* <p>
                    Seeking opportunities as a Software engineer
                </p> */}
                {/* <a href="https://www.linkedin.com/in/pruthwik-gowda-576926248/" target="_blank">
                        <img src={linkedInIcon} alt="twitter logo" />
                </a> */}
                {/* <a href={Resume} target="_blank" download>
                    <button className='hover'>
                        Resume
                    </button>
                </a> */}
            </div>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero} 
                    src={heroImg} 
                    alt="Profile picture"
                />
                {/* <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt='Theme toggle' 
                onClick={toggleTheme}/> */}
            </div>
        </section>
    )
}

export default Hero