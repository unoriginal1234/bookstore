import React from 'react'

function Inventory({books}) {
  if (books.length === 1) {
    return (
        <div className='card reverse'>
            <h2>Inventory</h2>
                <p>No Books Yet</p>
        </div> 
    )}
    
    return (
        <div className='card reverse'>
            <h2>Inventory</h2>
        <ul>
        {books.map((book, index) => {
            if (index === 0) {
                return null;
              }
            return <li>{book.name}</li>
           
            })}
        </ul>
    </div>
    )
}

export default Inventory
