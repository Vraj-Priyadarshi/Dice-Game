

let randomnumber1 = Math.floor(Math.random()*6)+1;
let randomnumber2 = Math.floor(Math.random()*6)+1;


let image1 = document.querySelector(".img1");
let image2= document.querySelector(".img2");
let result = document.querySelector("#result");


let x =`images/dice${randomnumber1}.png`;
let y =`images/dice${randomnumber2}.png`;
image1.setAttribute("src",x);
image2.setAttribute("src",y);
if (performance.navigation.type === performance.navigation.TYPE_RELOAD){
    if(randomnumber1>randomnumber2){
        result.innerText ="Winerr is Player 1";
    }else if(randomnumber2>randomnumber1){
        result.innerText= "Winerr is Player 2";
    }else{
        result.innerText = "Its was a DRAW";
    }
}
