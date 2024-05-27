import './App.css';
import { useEffect, useState } from "react"
import {createBoard} from "./createBoard"

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
  const dragEnd = (e) => {
    console.log(e.target)
    setSquareBeingReplaced(e.target)
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
              data-id={block.id}
              draggable={true}
              onDragStart={dragStart}
              onDragEnd={dragEnd}
             />
        ))}

      </div>
    </div>
  );
}

export default App;
