import { useState } from "react"

// function BgChanger(){
//     const [color, setColor] = useState('white')

//     return (
//       <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
//         <div className="fixed flex flex-wrap justify-center bottom-52 inset-x-0 px-2">
//           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
//             <button className="outline-none px-4 py-1 rounded-full bg-red-600
//              text-white shadow-lg" onClick={()=> setColor("red")}>Red</button>
//              <button className="outline-none px-4 py-1 rounded-full bg-green-600
//              text-white shadow-lg" onClick={()=> setColor("green")}>Green</button>
//              <button className="outline-none px-4 py-1 rounded-full bg-black
//              text-white shadow-lg" onClick={()=> setColor("black")}>Black</button>
//              <button className="outline-none px-4 py-1 rounded-full bg-white
//              text-black shadow-lg" onClick={()=> setColor("white")}>White</button>
//              <button className="outline-none px-4 py-1 rounded-full bg-cyan-600
//              text-black shadow-lg" onClick={()=> setColor("cyan")}>Cyan</button>
//           </div>
//         </div>
//       </div>
//     )
// }

function BgChanger({colorCodes, defaultColor = 'white'}){
    const [color, setColor] = useState(defaultColor)

    return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-52 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
            {
                colorCodes.map((color)=>{
                    return(
                    <button className="outline-none px-4 py-1 rounded-full 
             text-white shadow-lg" onClick={()=> setColor(color)} 
             style={{backgroundColor:color}}>{color}</button>
                    )
                })
            }
          </div>
        </div>
      </div>
    )
}

export default BgChanger