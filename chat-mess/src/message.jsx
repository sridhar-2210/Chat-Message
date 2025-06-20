import './message.css'
function Message({friend,setchat,inputvalue,setinputvalue}){
  const handlesearch=(e)=>{
    e.preventDefault();
    const newMessage = {
      sender: "me",
      message: inputvalue,
      time: "9:40 PM"
    };
    setchat(prev => ({
    ...prev,
    [friend.title]: [newMessage, ...prev[friend.title]]
    }));
    setinputvalue("");
  };
  return(
    <div className="messagei">
      <input className="input" type='text' placeholder='Message' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}></input>
      <button className="send" onClick={handlesearch}></button>
    </div>
  )
}
export default Message;