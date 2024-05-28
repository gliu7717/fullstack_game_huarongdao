import './App.css';
import { useEffect, useState } from "react"
import {createBoard,
  blank1,
  blank2
} from "./createBoard"
import { MOVE_DIR } from './moveDir';
import { getMoveDirection } from './getMoveDirection';
import { getDownBlocks,
  getUpBlocks,
  getRightBlocks,
  getLeftBlocks
} from './getBlock';

function App() {
  const [blocks, setBlocks] = useState([])
  let blockBeingDragged = null
  let blockBeingReplaced= null

  function findBlockItem(arr, id) {
    return arr.filter((el) => el.id === id )[0];
  }

  useEffect(() => {
    setBlocks(createBoard())    
  }, [])
  const dragStart = (e) => {
    blockBeingDragged = e.target
  }
  const dragDrop = (e) => {
    blockBeingReplaced =e.target
  }
  const dragEnd = (e) => {
    const blockBeingDraggedId = parseInt(blockBeingDragged.getAttribute('block-id'))
    const blockBeingReplacedId = parseInt(blockBeingReplaced.getAttribute('block-id'))
    if (blockBeingReplacedId && blockBeingReplacedId ){
      if(blockBeingDraggedId === blank1.id || blockBeingDraggedId === blank2.id ){
        return
      }
      if(blockBeingReplacedId !== blank1.id && blockBeingReplacedId !== blank2.id){
        return
      }
      let sBlock = findBlockItem(blocks, blockBeingDraggedId)
      let dBlock = findBlockItem(blocks, blockBeingReplacedId)
      console.log(sBlock)
      console.log(dBlock)
      const move = getMoveDirection(sBlock, dBlock)
      if(move === MOVE_DIR.INVALID_MOVE)
        return
      if(move === MOVE_DIR.MOVE_DOWN){
        console.log(move)
        if(sBlock.width === 1){
          dBlock.positionY = sBlock.positionY
          sBlock.positionY += 1
        } else{
          let [b1,b2] = getDownBlocks(blocks, sBlock)
          console.log(b1, b2)
          if(b1!==null && b2!== null){
            console.log("valid move down")
            b1.positionY = b2.positionY = sBlock.positionY
            sBlock.positionY += 1   
          }
        }
      }
      else if(move === MOVE_DIR.MOVE_UP){
        if(sBlock.width === 1){
          dBlock.positionY = sBlock.positionY + sBlock.height -1
          sBlock.positionY -= 1
        } else {
          let [b1,b2] = getUpBlocks(blocks,sBlock)
          if(b1!==null && b2!== null){
            b1.positionY = b2.positionY = sBlock.positionY + sBlock.height -1
            sBlock.positionY -= 1   
          }
        }
      }
      else if(move === MOVE_DIR.MOVE_LEFT){
        if(sBlock.height === 1){
          dBlock.positionX = sBlock.positionX + sBlock.width -1
          sBlock.positionX -= 1
        }else{
          let [b1,b2] = getLeftBlocks(blocks,sBlock)
          if(b1!==null && b2!== null){
            b1.positionX = b2.positionX = sBlock.positionX + sBlock.width -1
            sBlock.positionX -= 1   
          }
        }
      }
      else if(move === MOVE_DIR.MOVE_RIGHT){
        if(sBlock.height === 1){
          dBlock.positionX = sBlock.positionX 
          sBlock.positionX += 1
        }else{
          let [b1,b2] = getRightBlocks(blocks,sBlock)
          if(b1!==null && b2!== null){
            b1.positionX = b2.positionX = sBlock.positionX 
            sBlock.positionX += 1   
          }
        }
      }
      setBlocks([...blocks])
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
