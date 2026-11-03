 function Header({age,name}){
  console.log(age,name)
    
  return ( 
  <>
    <h1>hello {name}</h1>
    <p> you're {age} years old</p>
  </>
  )
}  
export default Header;

