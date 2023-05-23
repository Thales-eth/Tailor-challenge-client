import styles from './Errors.module.css'

const Errors = ({ errors }) => {

    return (
        errors.length !== 0 &&
        <div className={styles.errors}>
            {
                errors.map(error => {
                    return (
                        <p key={error} className={styles.error}>{error}</p>
                    )
                })
            }
        </div>
    )
}

export default Errors