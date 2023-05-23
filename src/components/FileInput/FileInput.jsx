import styles from './FileInput.module.css'

const FileInput = ({ handleFileUpload, msg }) => {
    return (
        <div className={styles.avatar}>
            <input
                className={styles.fileInput}
                name='avatar'
                onChange={handleFileUpload}
                id='avatar'
                type="file"
                placeholder='avatar'
            />
            <label htmlFor='avatar' className={styles.fileInputLabel}>
                {msg}
            </label>
        </div>
    )
}

export default FileInput