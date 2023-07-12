var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");   
    document.getElementById(tabname).classList.add("active-tab");
    
}

var sidemeu=document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}
const form2=document.getElementById("form");
const msg=document.getElementById("msg");


function afterSubmit(){
    msg.innerHTML = "Message sent successfully";
    setTimeout(function(){
        msg.innerHTML="";
        form2.submit();
    },3000)  
    event.preventDefault();
    form2.reset();

}



   



