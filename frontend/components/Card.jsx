import styles from "../styles/Card.module.css"

export default function Card({ course }) {
    return (
        <div className={styles.card} title={course.code + " / " + course.period + "º Per"}>
            <strong>{course.name}</strong>
        </div>
    )
}
