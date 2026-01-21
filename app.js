let si=document.querySelector(".si");
let pa=document.querySelector(".pa");
let st=document.querySelector(".st");


st.addEventListener("click",()=>{
    localStorage.setItem("ele",1);
    console.log("st");
});

pa.addEventListener("click",()=>{
    console.log("pa");
    localStorage.setItem("ele",2);
});

si.addEventListener("click",()=>{
    console.log("si");
    localStorage.setItem("ele",3);
});