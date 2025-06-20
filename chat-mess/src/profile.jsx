import './profile.css'
function Profile({friend}){
  return(
    <div className='profilei'>
      <div className='profilelogos'>
        <div className='profilelogo' style={{backgroundColor:friend.color}}>{friend.dp}</div>
        <div className={friend.status==="online"?'profiledot':friend.status==="offline"?"profileidot":""}></div>
      </div>
      <div className='profieinfo'>
        <div className='profiletitle'>{friend.title}</div>
        <div className='profilestatus'>{friend.status}</div>
      </div>
    </div>
  )
}
export default Profile;