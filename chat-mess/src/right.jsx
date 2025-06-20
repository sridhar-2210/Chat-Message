import './right.css'
import Profile from "./profile.jsx";
import Chat from "./chat.jsx";
import Message from "./message.jsx";
function Right({cht,setchat,friend,inputvalue,setinputvalue}){
  return(
    <div className="righti">
      <Profile friend={friend}></Profile>
      <Chat cht={cht} friend={friend}></Chat>
      <Message friend={friend} setchat={setchat} inputvalue={inputvalue} setinputvalue={setinputvalue}></Message>
    </div>
  )
}
export default Right;