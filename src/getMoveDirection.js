import {MOVE_DIR} from "./moveDir"
export const getMoveDirection = (sBlock, dBlock) => {
    if(sBlock.positionX + sBlock.width === dBlock.positionX)
      return MOVE_DIR.MOVE_RIGHT
    if(sBlock.positionX - 1 === dBlock.positionX)
      return MOVE_DIR.MOVE_LEFT
    if(sBlock.positionY - 1 === dBlock.positionY)
      return MOVE_DIR.MOVE_UP
    if(sBlock.positionY + sBlock.height === dBlock.positionY)
      return MOVE_DIR.MOVE_DOWN
    return MOVE_DIR.INVALID_MOVE
  }