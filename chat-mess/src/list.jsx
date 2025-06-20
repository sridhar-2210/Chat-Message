import Friendcard from './friendcard';
import './list.css'
function List({data,presentfriend,setpresentfriend}){
  return(
    <div className="listi">
      <div className='friends-grid'>
        {data.map((friend)=>(
          <Friendcard friend={friend} key={friend.id}  presentfriend={presentfriend} setpresentfriend={setpresentfriend}></Friendcard>
        ))}
       </div>
    </div>
  )
}
export default List;