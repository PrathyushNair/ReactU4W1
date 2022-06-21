import React from 'react'
import styles from "./style.module.css"

 const Item = ({el:{id,title,arr},list,setList,completed, setCompleted}) => {
    let [status,setStatus]=React.useState(arr)
     let deleteitem=(id)=>{
         setList(list.filter((items)=>(items.id!==id)))
     }
    
     let removeteitem=(id)=>{
        setCompleted(completed.filter((items)=>(items.id!==id)))
    }
    //console.log(el)
     let check=(e)=>{
          
         if(e.target.checked){
            //  setTick(tick[id]=true)
            
            setStatus(true)
            setList(list)
            completed.push({id,title,arr})
            setCompleted(completed)
            console.log(list)
            console.log("completed",completed)
        }
         else{
            setStatus(false)
            setList(list)
            removeteitem(id)
            console.log("completed",completed)
            
            

         }
  
     }
     // onClick={()=>check(el.status)}
     //style={{backgroundColor:el.status==="true" && "green"}}
  return (
    
        <div style={{backgroundColor: status && "green"}} className={styles.itemdiv} key={id}>
            <div style={{display:"flex",gap:"10px"}}>
                <input   onChange={check}className={styles.input2} type="checkbox"  ></input>
                { status ? <div style={{width:"auto", backgroundColor:"green"}}><s>{title}</s></div>:<div style={{width:"auto"}}>{title}</div>}
            </div>
           <div style={{display:"flex",gap:"10px",justifyContent:"space-between"}}>
                <button onClick={()=>deleteitem(id)}className={styles.bt2}>Remove</button>
                <div style={{marginTop:"5%"}}><i class="fa-regular fa-star"></i></div>
           </div>
            
        </div>
    
  )
}
export default Item
