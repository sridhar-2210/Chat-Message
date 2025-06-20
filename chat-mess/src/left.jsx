import './left.css'
import Options from "./options.jsx";
import List from "./list.jsx";
function Left({data,presentfriend,setpresentfriend}){
  return(
    <div className="lefti">
      <Options></Options>
      <List data={data} presentfriend={presentfriend} setpresentfriend={setpresentfriend}></List>
    </div>
  )
}
export default Left;