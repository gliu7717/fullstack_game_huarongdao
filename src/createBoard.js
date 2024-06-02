import blank from './images/blank.png'
import caocao from './images/caocao.png'
import zhangfei from './images/zhangfei.png'
import zhaoyun from './images/zhaoyun.png'
import guanyu from './images/guanyu.png'
import huangzhong from './images/huangzhong.png'
import machao from './images/machao.png'
import soilder from './images/solider.png'

export const blank1 = {
    id :11,
    name: "blank",
    image:blank,
    positionX : 1,
    positionY: 4,
    width : 1,
    height :1,
  }
  export const blank2 = {
    id :12,
    name: "blank",
    image:blank,
    positionX : 2,
    positionY: 4,
    width : 1,
    height :1,
  }


const createBoard = () =>{
    const zhangFei = {
      id :1,
      name: "zhangfei",
      image: zhangfei,
      positionX : 0,
      positionY: 0,
      width : 1,
      height :2,
    }
    const caoCao = {
        id :2,
        name: "caocao",
        image: caocao,
        positionX : 1,
        positionY: 0,
        width : 2,
        height :2,
      }
      const zhaoYun = {
        id :3,
        name: "zhaoyun",
        image: zhaoyun,
        positionX : 3,
        positionY: 0,
        width : 1,
        height :2,
      }
      const maChao = {
        id :4,
        name: "machao",
        image:machao,
        positionX : 0,
        positionY: 2,
        width : 1,
        height :2,
      }
      const guanYu = {
        id :5,
        name: "guanyu",
        image:guanyu,
        positionX : 1,
        positionY: 2,
        width : 2,
        height :1,
      }
      const huangZhong = {
        id :6,
        name: "huangzhong",
        image: huangzhong,
        positionX : 3,
        positionY: 2,
        width : 1,
        height :2,
      }
      const soilder1 = {
        id :7,
        name: "soilder",
        image:soilder,
        positionX : 0,
        positionY: 4,
        width : 1,
        height :1,
      }
      const soilder2 = {
        id :8,
        name: "soilder",
        image:soilder,
        positionX : 1,
        positionY: 3,
        width : 1,
        height :1,
      }
  
      const soilder3 = {
        id :9,
        name: "soilder",
        image:soilder,
        positionX : 2,
        positionY: 3,
        width : 1,
        height :1,
      }
      const soilder4 = {
        id :10,
        name: "soilder",
        image:soilder,
        positionX : 3,
        positionY: 4,
        width : 1,
        height :1,
      }

      const boardArrangement = []
      boardArrangement.push(zhangFei)
      boardArrangement.push(caoCao)
      boardArrangement.push(zhaoYun)
      boardArrangement.push(maChao)
      boardArrangement.push(guanYu)
      boardArrangement.push(huangZhong)
      boardArrangement.push(soilder1)
      boardArrangement.push(soilder2)
      boardArrangement.push(soilder3)
      boardArrangement.push(soilder4)
      boardArrangement.push(blank1)
      boardArrangement.push(blank2)
      return boardArrangement
}
export default createBoard