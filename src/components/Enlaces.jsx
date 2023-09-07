import styles from '/styles/enlaces.module.css';
import github from '/github.svg';
import linkedin from '/linkedin.svg';
import mail from '/mail.svg';

export default function Enlaces() {
    return (
        <>
            <div className={styles.card}>


                <a className={styles.social_link2} href='https://www.linkedin.com/in/daniel-posadas-rangel/' target='_blank' rel="noreferrer">
                    <img src={linkedin} alt="Icono Linkedin" width={45} height={45} />
                </a>


                <a className={styles.social_link1} href='https://github.com/DanielPosR' target='_blank' rel="noreferrer">
                    <img src={github} alt="Icono Github" wwidth={45} height={45} />
                </a>

                <a className={styles.social_link3} href='mailto:danielposr@outlook.com' target='_blank' rel="noreferrer">
                    <img src={mail} alt="Icono Whats App" width={45} height={45} />
                </a>

            </div>
        </>
    )
}
