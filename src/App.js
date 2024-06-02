import './App.css';
import { useEffect, useState } from "react"
import createBoard from './createBoard';
import { moveBlock } from './moveBlock';

function App() {
  const [blocks, setBlocks] = useState([])
  let blockBeingDragged = null
  let blockBeingReplaced = null
  useEffect(() => {
    setBlocks(createBoard())    
  }, [])

  const dragStart = (e) => {
    console.log(e.target)
    blockBeingDragged = e.target
  }
  const dragDrop = (e) => {
    console.log(e.target)
    blockBeingReplaced = e.target
  }
  const dragEnd = (e) => {
    if(blockBeingDragged === null || blockBeingReplaced==null)
      return
    const blockBeingDraggedId = parseInt(blockBeingDragged.getAttribute('block-id'))
    const blockBeingReplacedId = parseInt(blockBeingReplaced.getAttribute('block-id'))
    console.log(blockBeingDraggedId)
    console.log(blockBeingReplacedId)
    if (moveBlock(blocks, blockBeingDraggedId, blockBeingReplacedId))
      setBlocks([...blocks])
    }

  return (
    <div className="App">
      <div className="game">
        {blocks.map((block,index) => (
            <img 
              key = {index}
              src={block.image}
              style={{ width: block.width*70, height: block.height*70, position: 'absolute', top: block.positionY * 70, left: block.positionX * 70}}
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
