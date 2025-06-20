import './myinfo.css'
function Myinfo({overlay}){
  return(
    overlay&&(
      <div className="pop">
        <div className='Bax'>
          Caleb Lewis
        </div>
        
        <div className='tp'>
          <div>
            My Profile
          </div>
          <div>
            Edit Profile
          </div>
          <div>
            My Friends
          </div>
          <div>
            My Activity
          </div>
          <div>
            Settings
          </div>
        </div>
        <div className='Bax'>
          Log Out
        </div>
      </div>
    )
  )
}
export default Myinfo;