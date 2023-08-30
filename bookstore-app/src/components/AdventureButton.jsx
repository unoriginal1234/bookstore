function AdventureButton({handleClick, buttons}) {

  return (
    <div>

    {buttons.map((button, index) => (
      <button onClick={handleClick} key={index} id={button} className="btn btn-secondary">{button}</button>
    ))}
      </div> 
  );
}

export default AdventureButton
