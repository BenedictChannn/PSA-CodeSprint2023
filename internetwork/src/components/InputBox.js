import styles from './InputBox.css'

export default function InputBox({type, value, setValue, placeholder, secureTextEntry}) {

    return (
      <div className={styles.container}>
        <input className={styles.input} type={type} placeholder={placeholder} onChange={setValue} value={value}>
        </input>
      </div>
    )
}





