import './App.css';
import { useEffect, useState } from "react"
import {createBoard,
  blank1,
  blank2
} from "./createBoard"

function App() {
  const [blocks, setBlocks] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
  useEffect(() => {
    setBlocks(createBoard())    
  }, [])
  const dragStart = (e) => {
    console.log(e.target)
    setSquareBeingDragged(e.target)
  }
  const dragDrop = (e) => {
    console.log(e.target)
    setSquareBeingReplaced(e.target)
  }
  const dragEnd = (e) => {
    console.log(e.target)
    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('block-id'))
    const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('block-id'))
    console.log(squareBeingDraggedId)
    console.log(squareBeingReplacedId)
    if (squareBeingReplacedId && squareBeingReplacedId ){
      if(squareBeingDraggedId === blank1.id || squareBeingDraggedId === blank2.id ){
        console.log("Draged a blank block")
        return
      }
      if(squareBeingReplacedId !== blank1.id && squareBeingReplacedId !== blank2.id){
        console.log("Dropped on a non-blank block")
        return
      }
    }
  }

  return (
    <div className="App">
      <div className="game">
        {blocks.map((block,index) => (
            <img 
              className={block.cname}
              key = {index}
              src={block.image}
              style={{backgroundColor:block.color, width: block.width*70, height: block.height*70, position: 'absolute', top: block.positionY * 70, left: block.positionX * 70}}
              alt={block.name}
              block-id={block.id}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
             />
        ))}

      </div>
    </div>
  );
}
export default App;
