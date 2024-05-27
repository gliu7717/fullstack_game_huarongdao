import './App.css';
import { useEffect, useState } from "react"
import {createBoard,
  blank1,
  blank2
} from "./createBoard"
import { MOVE_DIR } from './moveDir';
import { getMoveDirection } from './getMoveDirection';
import { getDownBlocks } from './getBlock';


function App() {
  const [blocks, setBlocks] = useState([])
  const [blockBeingDragged, setblockBeingDragged] = useState(null)
  const [blockBeingReplaced, setblockBeingReplaced] = useState(null)

  function findBlockItem(arr, id) {
    return arr.filter((el) => el.id === id )[0];
  }

  useEffect(() => {
    setBlocks(createBoard())    
  }, [])

  useEffect(()=>{
    const timer = setInterval(() => {
      setBlocks([...blocks])
    }, 100)
    return () => clearInterval(timer)
  }, [ blocks ])

  const dragStart = (e) => {
    setblockBeingDragged(e.target)
  }
  const dragDrop = (e) => {
    setblockBeingReplaced(e.target)
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
