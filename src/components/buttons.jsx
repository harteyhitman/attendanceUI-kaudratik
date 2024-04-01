
const Buttons = ({onClick, label, className, icon }) => {
  return (
    <button  onClick={onClick} 
    className={className}>

            {icon}
            {label}
           
    </button>
  )
}

export default Buttons