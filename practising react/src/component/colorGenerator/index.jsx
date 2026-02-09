import { useState } from "react"

export default function RandomColor(){
    const [color, setColor] = useState("#ffffff")
    function generateRandomColor(){
        const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        let hexColor = "#"
        for(let i = 0; i < 6 ; i++)
            hexColor +=  hex[Math.floor(Math.random() * hex.length)];
        setColor(hexColor)
    }
    return (
        <div style={ {width:"100vw", height:"300px", background: color} }>
            <button style={{padding:"10px"}} onClick={generateRandomColor}>Generate Random Color</button>
            <h3>Color: {color}</h3>
        </div>
    )
}