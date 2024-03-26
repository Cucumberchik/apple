"use client"
import React, { useState } from 'react'

export default function Sliders() {
    const [current, setCurrent] = useState<number>(0);

function handleCurrent(id: number) {

}

// function adjustCurrent(id: number) {
//     if (current !== id) {
//         setTimeout(() => {
//             if (current < id) {
//                 setCurrent((prevCurrent) => prevCurrent + 1);
//                 adjustCurrent(id)
//             } else {
//                 setCurrent((prevCurrent) => prevCurrent - 1);
//                 adjustCurrent(id)
//             }
//         }, 100);
//     }else{
//         return;
//     }
// }
    
  const films: string[] = [
    "https://is1-ssl.mzstatic.com/image/thumb/cXVsKbD0Sk-ogzcoNmj6aA/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/DwR3ldPe-AAH2-2Lk5dJyw/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/5d/03/8f/5d038fcb-5eca-617a-2f71-ac4981a9b0ec/50091f02-02e2-4bb5-bb67-ac4684713221.png/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/ocWOeR6MwIjXnwNd8i6cqw/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/GmGct-UQdZiygnmiJcghfw/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/rss8pF-klNy76S-NWFue-A/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/fxmqlDPhakuoLP6lUM2xMA/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/980x551.jpg"
  ]
  return (
    <section id="apple_tv_sliders">
        <div className="content">
            {films.map((el:string, id:number)=>(
               <img key={id} src={el} alt="image" />
            ))}   
        </div>
        <div className="content_current">
            {films.map((el:string, id:number)=>(
                <button onClick={()=>handleCurrent(id+1)} style={{background: id == current ? "rgb(143, 142, 142)" : "rgb(197, 197, 197)"}} key={id}></button>
            ))}
        </div>
    </section>
  )
}
