var btnMenu=document.getElementsById("btn-menu");
btnMenu.addEventListener("click",toggleMenu);

function toggleMenu(e){
    var eventTarget=e.target;
    if(eventTarget.className=="btn-open"){
        eventTarget.className=="btn-close";
    }else if(eventTarget.className=="btn-close"){
        eventTarget.className=="btn-open";
    }
     
}