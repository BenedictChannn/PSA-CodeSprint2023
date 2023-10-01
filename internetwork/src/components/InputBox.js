import './InputBox.css'
export default function InputBox({type, value, setValue, placeholder}) {
  const handleChange = (event) => {
    setValue(event.target.value)
  }

    return (
      <div className="container">
        <input className="input" type={type} placeholder={placeholder} onChange={handleChange} value={value}>
        </input>
      </div>
    )
}

