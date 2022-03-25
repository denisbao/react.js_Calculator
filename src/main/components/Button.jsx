import './Button.css'

export function Button(props) {
  return (
    <button className='button'>
      {props.label}
    </button>
  )
}