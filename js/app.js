const userButton = document.getElementById('user');
const compButton = document.getElementById('comp');
const userMenu = document.getElementById('user-menu');
const compMenu = document.getElementById('comp-menu');

userButton.addEventListener('click', function(){
    if(userMenu.style.display=="grid"){
        userMenu.style.display = "none";
    }
    else{
        userMenu.style.display = "grid";
        compMenu.style.display = "none";
    }
})

compButton.addEventListener('click', function(){
    if(compMenu.style.display=="grid"){
        compMenu.style.display = "none";
    }
    else{
        compMenu.style.display = "grid";
        userMenu.style.display = "none";
    }
})