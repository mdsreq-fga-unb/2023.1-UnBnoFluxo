import styles from "../styles/Card.module.css"

export default function Card({ course }) {

    return (
        <div className={styles.card} title={course.code + " / " + course.period + "º Per"}>

            <strong>{course.alias}</strong>
            <div className={`${styles.tipo}  ${course.nature=="optative"?styles.optative:styles.mandatory}`}></div>
        </div>
    )

}
