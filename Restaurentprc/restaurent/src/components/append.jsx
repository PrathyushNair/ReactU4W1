import React from "react"
//import styles from "./style.module.css"

let Append=({name,star,total_votes,costfor_two,reviews,payment_method})=>
{
    return(
        <div style={{border:"1px solid green",width:"80%"}}>
            <div>Name:{name}</div>
            <div>Stars:{star}</div>
            <div>Continental</div>
            <div>Votes:{total_votes}</div>
            <div>Cost for two:{costfor_two}</div>
            <div>Reviews:{reviews}</div>
            <div>Payment method:{(payment_method==="co" && <p>Cash only</p>)||
                  (payment_method==="b" &&<p>Both</p>)||(payment_method==="ca" &&<p>Card Accepted</p>)}</div>
        </div>
    )
}
export default Append