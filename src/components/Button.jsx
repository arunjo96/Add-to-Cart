

export default  function Button({name, variant, onClick}) {
                return (
                        <button className={variant} onClick={onClick}  >{name}</button>
                )
            }