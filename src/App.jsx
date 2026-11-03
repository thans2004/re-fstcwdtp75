//componet - reusable piece of UI

import Header from "./components/Header";

//parent comonent or root component
function App (){

  // passing data from onr compnent to another compnent
  // parent compnent to child compnent
  const age = 25; 
  return(
    <>
    <Header age={25}  name ={'thansh'}/>
    <Header age={35} name = {'villan'}/>
    <Header age={15} name = {'krish'}/>
    </>
  )  
};
export default App;