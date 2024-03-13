let containerTopId = document.getElementById("container-top-id");
let containerLeftId = document.getElementById("container-left-id");
let containerBottomId = document.getElementById("container-bottom-id");
let containerRightId = document.getElementById("container-right-id");

containerTopId.addEventListener('click', function(){
    containerLeftId.classList.toggle("d-none");
});

containerLeftId.addEventListener('click', function(){
    containerBottomId.classList.toggle("d-none");
});

containerBottomId.addEventListener('click', function(){
    containerRightId.classList.toggle("d-none");
});