var Booked=0;
var Remaining=100;
document.getElementById("wr").innerHTML="BOOKED SEATS "+Booked+"<br>"+"SEATS LEFT "+Remaining;
var container=document.getElementById("container");
for(i=0;i<100;i++)
{  var sess=document.createElement("div");
    sess.className="box";
    container.appendChild(sess);}
  
    let boxes=document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.classList.contains("selected"))
        {
            box.classList.remove("selected");
            Booked--;
            Remaining++;
            document.getElementById("wr").innerHTML="BOOKED SEATS "+Booked+"<br>"+"SEATS LEFT "+Remaining;
        }
        else{
            box.classList.add("selected");
            Booked++;
            Remaining--;
            document.getElementById("wr").innerHTML="BOOKED SEATS "+Booked+"<br>"+"SEATS LEFT "+Remaining;
        }
    })
})
    
