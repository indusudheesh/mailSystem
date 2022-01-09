
function validate()
{
  let email=document.getElementById("email");
  let lblemail=document.getElementById("lblEmailVal");
    if(email.value=="")
    {   
      
      lblemail.innerText="*Enter an email";
      return false;
    }
  
  else
  {
      var e= testemail();
      if(e)
      {
        return true;
      }

      else
      return false;

  }     
  
    

}


function testemail()
{
  let regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  let email=document.getElementById("email");
  let lblemail=document.getElementById("lblEmailVal");
  if(regexpemail.test(email.value))
  {
     return true;    
  }
else
  { 
 lblemail.innerText="*Enter a valid email id";
 email.focus();
 return false;          
 } 
}