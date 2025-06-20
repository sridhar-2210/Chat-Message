import './friendcard.css'
function Friendcard({friend,presentfriend,setpresentfriend}){
  return(
    <div className={presentfriend.title==friend.title?"friendiy":"friendi"} onClick={()=>setpresentfriend(friend)}>
      <div className='logos'>
        <div className='friendlogo' style={{backgroundColor:friend.color}}>
          {friend.dp}
        </div>
        <div className={friend.status==="online"?"statusonline":friend.status==="offline"?"statusoffline":""} >

        </div>
      </div>
      <div className='info'>
        <div className='head'>
          <div className='title'>
            {friend.title}
          </div>
          <div className='time'>
            {friend.time}
          </div>
        </div>
        <div className='last'>
          {friend.info} 
        </div>
      </div>
    </div>
  )
}
export default Friendcard