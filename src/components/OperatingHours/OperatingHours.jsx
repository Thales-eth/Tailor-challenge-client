import styles from './OperatingHours.module.css'

const OperatingHours = ({ operating_hours }) => {
    const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = operating_hours

    return (
        <div className={styles.operatingHours}>
            <p className={styles.title}>Operating Hours:</p>
            <p>Monday: {Monday}</p>
            <p>Tuesday: {Tuesday}</p>
            <p>Wednesday: {Wednesday}</p>
            <p>Thursday: {Thursday}</p>
            <p>Friday: {Friday}</p>
            <p>Saturday: {Saturday}</p>
            <p>Sunday: {Sunday}</p>
        </div>
    )
}

export default OperatingHours