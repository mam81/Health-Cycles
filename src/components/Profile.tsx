import styles from "../styles/components/Profile.module.css"

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/mam81.png" alt="Matheus Antunes" />
            <div>
                <strong>Matheus Antunes</strong>
                <p>
                    <img src="icons/level.svg" />
                    Level 1
                </p>
            </div>
        </div>
    );
}