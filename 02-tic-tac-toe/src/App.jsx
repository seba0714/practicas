import { useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square =({children, updateBoard,isSelected, index}) => {
  const className = `square ${isSelected} ? 'is-selected': ''}`;
  
  
const handleCLick = ()=>{
  updateBoard()
}  
  
  
  
  return(
    <div onClick={updateBoard} className='square'>
      {children}
    </div>
  )
}



function App() {
  const [board,setBoard] = useState(Array(9).fill(null))

  const [turn,setTurn] = useState(TURNS.X)  

  const updateBoard = () => {

  }
  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <section className="game">
        {
          board.map((cell, index) => {
            return(
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
               
                </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
          <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App

