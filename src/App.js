import './App.css';
import { useEffect, useState } from "react"
import createBoard from "./createBoard"

function App() {
  const [blocks, setBlocks] = useState([])
  useEffect(() => {
    setBlocks(createBoard())    
  }, [])

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
             />
        ))}

      </div>
    </div>
  );
}

export default App;
