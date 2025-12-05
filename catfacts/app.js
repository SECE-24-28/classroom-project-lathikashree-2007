async function apicall(){
       let result=await fetch("https://meowfacts.herokuapp.com/")
       let finalresult=await result.json()
       document.getElementById("res").innerHTML=finalresult.data[0]
}