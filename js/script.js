/*#region           menu  */
function myNav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.right == "0%"){
            nav.style.right="-100%";
            bar.src = "/img/menu.png";
        }
        else{
            nav.style.right ="0%";
            bar.src = "/img/menu.png";
        }
    }
}
myNav();
/* #endregion */
/* if(nav.style.right == "0%"){
    nav.style.right="-100%";
    bar.src = "/img/menu.png";
}
else{
    nav.style.right ="0%";
    bar.src = "/img/menu.png";
} */