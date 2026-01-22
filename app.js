let si = document.querySelector(".si");
let pa = document.querySelector(".pa");
let st = document.querySelector(".st");
let el = document.querySelectorAll(".el");
let screen = document.querySelector(".screen");
let hh = document.querySelector(".hh");

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let u;
var pc;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var winer;
fill1();
function fill1(){
    el.forEach(events => {
    events.addEventListener("mouseenter", (event) => {
        event.target.style.transform = "translateY(-10px)";
    });
    events.addEventListener("mouseleave", (event) => {
        event.target.style.transform = "translateY(0px)";
    });
    
    events.addEventListener("click", async () => {
        u = Number(events.getAttribute("data-value"));

        pc = (getRandomInt(1, 4));
        console.log(pc);
        sho("i2");
        await fadd();

        sho("i3");
        await fill2();

        sho("i4");
        await fill3();

    });


});
}


const ids = ["i1", "i2", "i3", "i4"];

function sho(id) {
    for (let i of ids) {
        document.getElementById(i).classList.add("hide");
    }
    document.getElementById(id).classList.remove("hide");
}




function geti(n) {
    if (n === 1) return "stone.png";
    else if (n === 2) return "paper.png";
    else return "scissors.png";
}

async function fill2() {
    for (let i = 0; i < 2; i++) {
        await delay(1000);
        document.querySelector(".left").style.backgroundImage = `url(${geti(u)})`;
        await delay(1000);
        document.querySelector(".right").style.backgroundImage = `url(${geti(pc)})`;
    }
    await delay(1000);
}

function fill3() {
    if (u === pc) {
        winer = u;
        document.querySelector(".wint").innerText = `Its a Draw`;
    }
    else {
        if (u === 1 && pc === 3) winer = u;
        if (u === 1 && pc === 2) winer = pc;
        if (u === 2 && pc === 1) winer = u;
        if (u === 2 && pc === 3) winer = pc;
        if (u === 3 && pc === 1) winer = pc;
        if (u === 3 && pc === 2) winer = u;

        document.querySelector(".wint").innerText = `And the Winner is `;
    }
    document.querySelector(".win").style.backgroundImage = `url(${geti(winer)})`;
    document.querySelector(".reset").addEventListener("click",()=>{
        sho("i1");
        fill1();
    })
    document.querySelector(".reset").addEventListener("mouseenter", (event) => {
        event.target.style.transform = "translateY(-10px)";
    });
    document.querySelector(".reset").addEventListener("mouseleave", (event) => {
        event.target.style.transform = "translateY(0px)";
    });
}

//second page--------------------------------------------------------

async function fadd() {

    const ar = ["Stone", "Paper", "Scissor", "Shoot!!"];

    for (let i of ar) {
        hh.classList.add("op0");

        await delay(500);
        hh.innerText = i;
        console.log(hh.innerText);

        hh.classList.remove("op0");
        await delay(500);

    }
    // window.location.href='result.html';
}

