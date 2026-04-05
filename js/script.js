var tablinks = document.getElementsByClassName("tab-links");
var tabcontants = document.getElementsByClassName("tab-contents");

function opentab(tabname, el){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontant of tabcontants){
        tabcontant.classList.remove("active-tab");
    }
    el.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

  