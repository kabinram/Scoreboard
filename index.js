let home=document.getElementById("s1");
let guest=document.getElementById("s2");
let count=0;
let points=0;
//home
function addOne(){
    count +=1
    home.textContent= count;
}

function addTwo(){
    count +=2
    home.textContent= count;
}
function addThree(){
    count +=3
    home.textContent= count;
}

//guest

function plusOne(){
    points +=1
    guest.textContent= points;
}

function plusTwo(){
    points +=2
    guest.textContent= points;
}
function plusThree(){
    points +=3
    guest.textContent= points;
}