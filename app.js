let si = document.querySelector(".si");
let pa = document.querySelector(".pa");
let st = document.querySelector(".st");
let el = document.querySelectorAll(".el");
let screen = document.querySelector(".screen");
let hh = document.querySelector(".hh");

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let c = 0;


el.forEach(events => {
    events.addEventListener("mouseenter", (event) => {
        event.target.style.transform = "translateY(-10px)";
    });
    events.addEventListener("mouseleave", (event) => {
        event.target.style.transform = "translateY(0px)";
    });

    events.addEventListener("click", async() => {
        c = events.getAttribute("data-value");
        
        sho("i2");
        await fadd();
    });
    

});

const ids=["i1","i2"];

function sho(id){
    for(let i of ids){
        document.getElementById(i).classList.add("hide");   
    }
    document.getElementById(id).classList.remove("hide");
}






//second page--------------------------------------------------------

async function fadd() {

    const ar = ["Stone", "Paper", "Scissor", "Shoot!!"];

    for (let i of ar) {
        hh.classList.add("op0");

        await delay(1000);
        hh.innerText = i;
        console.log(hh.innerText);

        hh.classList.remove("op0");
        await delay(1000);

    }
    // window.location.href='result.html';
}

