// let arr=[{name:"Prathyush",age:"23"},
//          {name:"Haritha",age:"20"},
//          {name:"Sobhana",age:"49"}]
// arr.map(({name,age})=>{
//     console.log(name,age)
// })

// let str="aabb"

// function partition(str,ind,arr,p)
// {   if(ind==str.length)
//     {
//         arr.push()
//     }
//     for(let i=ind;i<str.length;i++)
//     {
//         ispalin(str,i,ind)
//         p.push(str.splice(ind))
//         partition(str,i+1,arr,p)
//     }
// }


    data=[{"name":"Madhuram","payment_method":"co","total_votes":800,"reviews":521,"costfor_two":5000,"star":5,"categories":["Indian","Continental"]},
    {"name":"Sea Front","payment_method":"ca","total_votes":812,"reviews":201,"costfor_two":501,"star":4,"categories":["Indian","Lebanese"]},
    {"name":"Mani's","payment_method":"co","total_votes":600,"reviews":420,"costfor_two":450,"star":2,"categories":["Indian","Mexican"]},
    {"name":"DP","payment_method":"ca","total_votes":250,"reviews":320,"costfor_two":620,"star":5,"categories":["Indian","Mediteranien"]},
    {"name":"Modak","payment_method":"b","total_votes":810,"reviews":560,"costfor_two":800,"star":3.5,"categories":["Indian","Continental"]},
    {"name":"Post Office","payment_method":"co","total_votes":780,"reviews":850,"costfor_two":900,"star":4,"categories":["Indian","Lebanese"]},
    {"name":"Star Planet","payment_method":"ca","total_votes":450,"reviews":700,"costfor_two":1000,"star":3.8,"categories":["Indian","Mexican"]},
    {"name":"Viva Hotel","payment_method":"ca","total_votes":900,"reviews":381,"costfor_two":700,"star":2,"categories":["Indian","Mediteranien"]},
    {"name":"Shreya","payment_method":"co","total_votes":624,"reviews":478,"costfor_two":700,"star":1,"categories":["Indian","Continental"]},
    {"name":"Vadvalite","payment_method":"ca","total_votes":721,"reviews":544,"costfor_two":700,"star":5,"categories":["Indian","Lebanese"]},
    {"name":"SK","payment_method":"b","total_votes":301,"reviews":987,"costfor_two":750,"star":4,"categories":["Indian","Mediteranien"]},
    {"name":"Saravana Bhavan","payment_method":"co","total_votes":555,"reviews":628,"costfor_two":600,"star":3,"categories":["Indian","Lebanese"]},
    {"name":"Katekir","payment_method":"ca","total_votes":860,"reviews":874,"costfor_two":400,"star":3,"categories":["Indian","Continental"]},
    {"name":"MM","payment_method":"b","total_votes":420,"reviews":927,"costfor_two":2000,"star":1,"categories":["Indian","Continental"]},
    {"name":"Sahara House","payment_method":"b","total_votes":100,"reviews":387,"costfor_two":900,"star":1,"categories":["Indian","Mediteranien"]},
    {"name":"Kitty Su","payment_method":"b","total_votes":630,"reviews":171,"costfor_two":550,"star":2,"categories":["Indian","Lebanese"]},
    {"name":"Taj","payment_method":"ca","total_votes":251,"reviews":718,"costfor_two":650,"star":2,"categories":["Indian","Continental"]},
    {"name":"Oriental","payment_method":"ca","total_votes":333,"reviews":368,"costfor_two":800,"star":4,"categories":["Indian","Mexican"]},
    {"name":"La Fab","payment_method":"ca","total_votes":578,"reviews":254,"costfor_two":350,"star":5,"categories":["Indian","Mediteranien"]},
    {"name":"Dewante","payment_method":"co","total_votes":605,"reviews":961,"costfor_two":870,"star":5,"categories":["Indian","Mexican"]}]

//   function filter()
//   {
//     let selected=200
//     let newdata=data.filter((el)=>{
//         return el.reviews>selected
//     })
//     console.log(newdata)
//   }
//   filter()

data.filter((el)=>(el.reviews >400)).map((el)=>{console.log(el.name)})
let handlechange=()=>{
  return "hey"
}
 

    




