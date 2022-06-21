import React from 'react'
import styles from "./style.module.css"
import { v4 as uuidv4 } from 'uuid';
import List from "./list"
 const Input = ({showtodo,setshowtodo, setInput,input,setList,list,setCompleted,completed}) => {
 
  let [tick,setTick]=React.useState({})
 let takeinput=(e)=>{
     setInput(e.target.value)
    
 }
 let changeshowdata=()=>{
  setshowtodo(!showtodo)
  
}

  return (
    <div>
     
        <button onClick={()=>{
                
                list.push({id:uuidv4(),title:input,arr:false})
                setList(list)
                setInput("")
                console.log(list)
               
        }}  className={styles.btn1}>+</button>
        <input onChange={takeinput} value={input} className={styles.input} placeholder='Add -a-to-do..'></input>
        <div>
        {list.map((el)=>(
            <List setTick={setTick} tick={tick} completed={completed}  setCompleted={setCompleted} el={el} list={list}setList={setList}></List>
        ))}
        </div>



        <div style={{display:"flex",width:"95%",margin:"auto"}}>
        <button className={styles.show} onClick={changeshowdata}>{ showtodo ? <span>HIDE COMPLETED LIST</span>: <span>SHOW COMPLETED LIST</span>}</button>
        </div>
        { showtodo ? (<>
                            
                            { 
                              completed.map((el)=>(
                                <div className={styles.appenddiv}>
                                  <div style={{display:"flex",gap:"15px"}}>
                                      <input style={{ height:"30px",width:"30px"}}type="checkbox" checked={true}></input>
                                      <div><s >{el.title}</s></div>
                                  </div>
                                  <div ><i class="fa-regular fa-star"></i></div>
                                </div>
                               
                                
                              ))
                            }
                        
                      </>)
        :(<></>)   }
    </div>
  )
}
export default Input


