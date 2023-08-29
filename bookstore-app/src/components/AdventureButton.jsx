function AdventureButton({handleClick1, handleClick2, button1, button2}) {

    
  return (
    <div>
        <button onClick={handleClick1} className="btn btn-secondary">{button1}</button>
        <button onClick={handleClick2} className="btn btn-secondary">{button2}</button>
    </div>
  )
}

export default AdventureButton
