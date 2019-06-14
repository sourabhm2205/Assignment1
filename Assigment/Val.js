function f1(){
    let x=document.getElementById("fname");
    let y=document.getElementById("mname");
    let z=document.getElementById("lname");
    let add=document.getElementById("add");
    let date=document.getElementById("date");
    let sel = document.getElementById("ss");
   let male=document.getElementById("male");
   let female=document.getElementById("female");
    let abc="";

    if(document.getElementById("ch1").checked)
{abc += "Music,";
}
if(document.getElementById("ch2").checked)
{
abc += "Cricket,"; 
}
if(document.getElementById("ch3").checked)
{
abc += "Others";
}

    let regName = /^[a-zA-Z]+$/;
    let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regs=/^[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
    let flag=0;
    let email=document.getElementById("email");
    let pno=document.getElementById("pno");
    if(!regName.test(x.value)){
        x.style.borderColor = "red";
        alert('Invalid first name.');
       
     }
     else if(y.value){
        if(!regName.test(y.value)){
            flag=1;
            y.style.borderColor = "red";
            alert('Invalid Middle name given.');
            
        }
            }
        
    else if(!regName.test(z.value)){
        z.style.borderColor = "red";
        alert('Invalid Last name given.');
      
              }
     
   else if(!emailExp.test(email.value)){
        email.style.borderColor="red";
        alert('Email Invalid');
        } 
    
    
     else if(!regs.test(pno.value)){
              pno.style.borderColor="red";
              alert('Pno Invalid');
              }
      else if(add.value==""){
        add.style.borderColor="red";
              alert('Address Invalid');
      } 
      else if(date.value==""){
        date.style.borderColor="red";
        alert('Date Invalid');
      }
    else if(abc.value==""){
        abc.style.borderColor="red";
        alert('Checkbox Invalid');
    }
      else if(abc==""){
        alert("plz check hobbies first");

      }
         else{
              pno.style.borderColor="blue";
              x.style.borderColor = "blue";
              y.style.borderColor = "blue";
              z.style.borderColor = "blue";
              date.style.borderColor = "blue";
              email.style.borderColor = "blue";
              add.style.borderColor = "blue";
              sel.style.borderColor = "blue";
              
let fullname=x.value+" "+y.value+" "+z.value;
           let   data = "<table><tr><th>Name</th><td>" +fullname+ "</td></tr>";
           data += "<tr><th>Email</th><td>" +email.value+ "</td></tr>";
           data += "<tr><th>Phone No.</th><td>" +pno.value+ "</td></tr>";
           if(male.checked)
{
data += "<tr><th>Gender</th><td>Male</td></tr>";
}
else if(female.checked)
{
data += "<tr><th>Gender</th><td>Female</td></tr>";
}
data += "<tr><th>Address</th><td>" +add.value+ "</td></tr>";
data += "<tr><th>DOB</th><td>" +date.value+ "</td></tr>"
data += "<tr><th>Education</th><td>" +sel.value+ "</td></tr>";

data += "<tr><th>Hobbies</th><td>" +abc+ "</td></tr></table>";
document.getElementById("a2").innerHTML = data;
              }        




 }

