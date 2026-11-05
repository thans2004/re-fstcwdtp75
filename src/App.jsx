import { useState } from "react"

const App = () => { 

const [likes,setLikes]   =   useState(0);
const [Dislike,setDislikes] = useState(0);

const handleLike = ()  => {
setLikes(likes + 1)
}
const handleDislike = () =>{
  setDislikes(Dislike + 1)
}

  return (
    <div>
    <button onClick={handleLike}>Likes{likes}</button>
    &nbsp;
      <button onClick={handleDislike}>Dislike{Dislike}</button>
    </div>
  )
}

export default App ;
