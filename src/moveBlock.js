import { blank1,blank2 } from './createBoard';
import { MOVE_DIR } from './moveDir';
import { getMoveDirection } from './getMoveDirection';
import { getXBlocks, getYBlocks } from './getBlock';

const findBlockItem = (arr, id) => {
    return arr.filter((el) => el.id === id )[0];
}

const validMove = (sBlockId, dBlockId)=>{
    let valid=false
    if (sBlockId && dBlockId ){
        if(sBlockId === blank1.id || sBlockId === blank2.id ){
          console.log("Draged a blank block")
        }
        else if(dBlockId !== blank1.id && dBlockId !== blank2.id){
          console.log("Dropped on a non-blank block")
        }
        else valid = true;
    }
    return valid
}

const moveDown = (blocks, sBlock, dBlock)=>
{
    if(sBlock.width === 1){
        dBlock.positionY = sBlock.positionY
        sBlock.positionY += 1
    } else{
        let [b1,b2] = getYBlocks(blocks, sBlock, sBlock.height)
        console.log(b1, b2)
        if(b1!==null && b2!== null){
          b1.positionY = b2.positionY = sBlock.positionY
          sBlock.positionY += 1   
        }
    }
}
const moveUp = (blocks, sBlock, dBlock)=>
{
    if(sBlock.width === 1){
        dBlock.positionY = sBlock.positionY + sBlock.height -1
        sBlock.positionY -= 1
    } else{
        let [b1,b2] = getYBlocks(blocks, sBlock, -1)
        if(b1!==null && b2!== null){
            b1.positionY = b2.positionY = sBlock.positionY + sBlock.height -1
            sBlock.positionY -= 1   
        }  
        }
}
    
const moveLeft = (blocks, sBlock, dBlock)=>{
    if(sBlock.height === 1){
        dBlock.positionX = sBlock.positionX + sBlock.width -1
        sBlock.positionX -= 1
    }else{
        let [b1,b2] = getXBlocks(blocks,sBlock, -1)
        if(b1!==null && b2!== null){
            b1.positionX = b2.positionX = sBlock.positionX + sBlock.width -1
            sBlock.positionX -= 1   
        }
    }
}
const moveRight = (blocks, sBlock, dBlock)=>{
    if(sBlock.height === 1){
        dBlock.positionX = sBlock.positionX 
        sBlock.positionX += 1
      }else{
        let [b1,b2] = getXBlocks(blocks,sBlock, sBlock.width)
        if(b1!==null && b2!== null){
          b1.positionX = b2.positionX = sBlock.positionX 
          sBlock.positionX += 1   
        }
      }
}

export const moveBlock = (blocks, sBlockId, dBlockId)=>
{
    if(!validMove(sBlockId, dBlockId))
        return false
    let sBlock = findBlockItem(blocks, sBlockId)
    let dBlock = findBlockItem(blocks, dBlockId)
    console.log(sBlock)
    console.log(dBlock)
    const move = getMoveDirection(sBlock, dBlock)
    switch (move){
        case MOVE_DIR.MOVE_DOWN:
            moveDown(blocks, sBlock, dBlock)
            break
        case MOVE_DIR.MOVE_UP:
            moveUp(blocks, sBlock, dBlock)
            break
        case MOVE_DIR.MOVE_LEFT:
            moveLeft(blocks, sBlock, dBlock)
            break
        case MOVE_DIR.MOVE_RIGHT:
            moveRight(blocks, sBlock, dBlock)
            break
            case MOVE_DIR.INVALID_MOVE:
        return false
    }            
    return true
}