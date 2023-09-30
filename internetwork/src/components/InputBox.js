import './InputBox.css'
export default function InputBox({type, value, setValue, placeholder}) {

    return (
      <div className="container">
        <input className="input" type={type} placeholder={placeholder} onChange={setValue} value={value}>
        </input>
      </div>
    )
}

