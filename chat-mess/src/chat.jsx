import './chat.css'
import Text from './text.jsx';
function Chat({cht,friend={title:"Emma Thompson"}}){
  
  return(
    <div className="chati">
      {cht[friend.title].map((text,index)=>(
        <Text text={text} key={index}></Text>
      ))}
    </div>
  )
}
export default Chat;