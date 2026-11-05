// passing data from child to parent component
import { useState } from "react";
//  event handling -> onClick,onDnlclick,onKeyDown,onKeyUp,onSubmit,...
//state variable
const App = () => {

let [likes,setLikes]=useState(0);
let [Dislike,setDislike]=useState(0);


  const handleLike =() =>{
    // increase the likes
    setLikes(likes + 1);
  }
   const handleDislike =() =>{

    // increase the likes
    if(likes>0){
   setDislike(Dislike+1);
   }
  }
  // state variable re render working 
  return (
    <div>
      <button onClick={handleLike}>
       likes{likes}</button>
        &nbsp;
        <button onClick={handleDislike}>
        Dislike{ Dislike }
        </button>
        
    </div>
  )
}
export default App;
