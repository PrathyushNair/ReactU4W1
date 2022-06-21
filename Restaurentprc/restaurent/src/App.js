import data from "./data.json" 
import './App.css';
import Append from "./components/append";
import styles from "./components/style.module.css"
function App() {
  console.log("data",data)
  
  return (
    <div className="App">
      <h2>Rest</h2>
      <div className={styles.appendstyle}>
        {data.data.map((el)=>{
          console.log(el.value)
          return(<Append {...el}/>)
        })}
      </div>
    </div>
  );
}

export default App;
