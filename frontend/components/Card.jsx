import styles from "../styles/Card.module.css"

export default function Card({ course }) {
    return (
        <div
            className={styles.card}
            title={course.displayName + "\n" + course.code + " / " + course.period + "º Per"}
        >
            <div className={styles.textBox}>
                {course.alias ? (
                    <strong className={styles.alias}>{course.alias}</strong>
                ) : (
                    <strong className={styles.displayName}>{course.displayName}</strong>
                )}
            </div>
            <div
                className={`${course.nature == "OBRIGATORIO" ? styles.mandatory : styles.optative}`}
            ></div>
        </div>
    )
}
