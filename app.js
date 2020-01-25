var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var winScore = 5;
var over = false;

p1.addEventListener("click", function(){
    if(!over){
        p1Score++;
        document.querySelector("#p1Score").textContent = p1Score;
        if(p1Score==winScore){
            document.querySelector("#p1Score").classList.add("green");
            over = true;
        }
    }
})

p2.addEventListener("click", function(){
    if(!over){
        p2Score++;
        document.querySelector("#p2Score").textContent = p2Score;
        if(p2Score==winScore){
            document.querySelector("#p2Score").classList.add("green");
            over = true;
        }
    }   
})

function resetFunction(){
    p1Score = 0;
    p2Score = 0;
    document.querySelector("#p1Score").textContent = p1Score;
    document.querySelector("#p2Score").textContent = p2Score;
    document.querySelector("#p1Score").classList.remove("green");
    document.querySelector("#p2Score").classList.remove("green");
    over = false;
}

reset.addEventListener("click", resetFunction);

input.addEventListener("change", function(){
    document.querySelector("#winScore").textContent = input.value;
    winScore = Number(input.value);
    resetFunction();
});