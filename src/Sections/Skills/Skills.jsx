import React from 'react'
import styles from './SkillsStyles.module.css'
import heroImg from '../../assets/Jayasheela-maam-image.jpg'
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
              <br />
                <h2>
                     FDP
                </h2>
                <div className={styles.subjects}>
                    
                    {/* <span className={styles.details}> */}
                    <p>1. FDP on “Augmented Reality & Virtual Reality and its Applications”</p>
<p>2. FDP on “Engineering in IoT, Mechatronics, Automation, Additive Manufacturing and Electric Vehicles”</p>
<p>3. FDP on “Cyber Security: Challenges and Countermeasures”</p>
<p>4. FDP on “AI Tools and Prompt Engineering”</p>
<p>5. FDP on “Emerging Technologies”</p>
<p>6. FDP on “Emerging Trends and Advances in Computing Technologies”</p>
<p>7. FDP on “Viksit Bharat 2047 - Role of Engineering Faculty”</p>
<p>8. FDP on “Exploring Computational Intelligence”</p>
<p>9. FDP on “Gen AI and Prompt Engineering”</p>

                </div>
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
                <br />
                <br />

                <h2>
                     Research and publication
                </h2>
                {/* <span className={styles.details}> */}
                <div className={styles.subjects}>
                <p>1. Cloud Computing Network---IRJMETS</p>
                <p>2. Impact of DNS on Web Performance---(IJMRSET)</p>
                <p>3. Mimic Encryption System For Network Security in Computer Networks-IRJMETS</p>
                <p>4. Resource Allocation in 4G AND 5G Networks: A Review– IRJMETS</p>
                <p>5. A Brief Study of Computer Network Security Technologies--IRJMETS</p>
                <p>6. Performance of HTTP in Real World----- IRJMETS</p>
                <p>7. Enhancing Road Safety with Advanced Sensor Technology and Mobile Integration--- IRJMETS</p>
                <p>8. "Self-Attention Encoder-Decoder with Model Adaptation for Transliteration and Translation Tasks in Regional Language“--- Journal of The Institution of Engineers (India): Series B (IEIB). Under Review.</p>
                <p>9. IEIB-D-24-01145 - Submission Notification to co-author - [EMID:c9689413d68b5c52]</p>
                <p>10. Route Redistribution and Secured Network Communication in Wireless Body Area Network--IRJMETS</p>
                <p>11. Software Defined Networking (SDN) in Cloud Computing– IRJMETS</p>
                <p>12. Advances in Network Security---IRJMETS</p>
                <p>13. Analyzing Wireless Sensor Network Topologies: A Comparative Review------ IRJMETS</p>
                <p>14. 4G and 5G Technology For Wireless Application: A Review-- IRJMETS</p>
                <p>15. Near Field Communication (NFC) in Computer Networks -- IJSET</p>
                <p>16. Advancing Towards 6G Communication: A Review---IRJMETS</p>
                <p>17. "Self-Attention Encoder-Decoder with Model Adaptation for Transliteration and Translation Tasks in Regional Language“--- Journal of The Institution of Engineers (India): Series B (IEIB). Under Review.</p>
                <p>18. IEIB-D-24-01145 - Submission Notification to co-author - [EMID:c9689413d68b5c52]</p>
                <p>19. Route Redistribution and Secured Network Communication in Wireless Body Area Network--IRJMETS</p>
                <p>20. Software Defined Networking (SDN) in Cloud Computing– IRJMETS</p>
                <p>21. Advances in Network Security---IRJMETS</p>
                <p>22. Analyzing Wireless Sensor Network Topologies: A Comparative Review------ IRJMETS</p>
                <p>23. 4G and 5G Technology For Wireless Application: A Review-- IRJMETS</p>
                <p>24. Near Field Communication (NFC) in Computer Networks -- IJSET</p>
                <p>25. Advancing Towards 6G Communication: A Review---IRJMETS</p>


                </div>
                

                
            </div>
            
        </section>
    )
}

export default Hero