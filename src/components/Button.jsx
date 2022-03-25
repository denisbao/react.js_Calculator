import './Button.css'

export function Button(props) {

  let styleClass = 'button '
  styleClass += props.operation ? 'operation' : ''
  styleClass += props.double ? 'double' : ''
  styleClass += props.triple ? 'triple' : ''

  return (
    <button 
      className={styleClass}
      onClick={e => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  )
}