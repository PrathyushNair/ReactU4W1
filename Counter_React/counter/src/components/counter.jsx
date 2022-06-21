import React from 'react'
//import styles from "./style.module.css"
let Countdiv=({initial})=>{
    let [count,setCount]=React.useState(initial)
    let increase=()=>{
        setCount(count+1)
    }
    let decrease=()=>{
        setCount(count-1)
    }
    let double=()=>{
        setCount(count*2)
    }
    // let iseven=()=>
    // {
    //     if(count%2===0)
    //     { console.log(count)
    //         return true
    //     }
    //     else{
    //         console.log(count)
    //         return false
    //     }
    // }
    return(
        <div>
            <h2>Count value:<span style={{color:count%2===0 ? "green":"red"}}>{count}</span></h2>
            <button onClick={increase}>Add</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={double}>Double</button>
        </div>
    )
}
export default Countdiv