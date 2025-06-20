import './text.css'
function Text({text}){
  return(
    <div className={text.sender==="me"?"MyBox":"OtherBox"}>
      <div className={text.sender==="me"?"MyText":"OtherText"}>
        {text.message}
      </div>
      <div className={text.sender==="me"?"Mytime":"Othertime"}>
        {text.time}
      </div>
    </div>
  )
}
export default Text;