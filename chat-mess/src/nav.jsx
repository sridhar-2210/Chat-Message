import './nav.css'
function Nav({overlay,setoverlay}){
  return(
    <div className="navi">
      <div className='logo'>logo</div>
      <div className='user' onClick={()=>setoverlay(!overlay)}>CL</div>
    </div>
  )
}
export default Nav;