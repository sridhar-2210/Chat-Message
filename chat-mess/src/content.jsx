import './content.css'
import Left from "./left";
import Right from "./right";

function Content({cht,setchat,data,friend,setpresentfriend,inputvalue,setinputvalue}){
  return(
    <div className="contenti">
      <Left data={data} presentfriend={friend} setpresentfriend={setpresentfriend}></Left>
      <Right cht={cht} setchat={setchat} friend={friend} inputvalue={inputvalue} setinputvalue={setinputvalue}></Right>
    </div>
    
  )
}
export default Content;