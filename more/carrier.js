let ScrollContainer=document.querySelector(".slider");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");
ScrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    ScrollContainer.scrollLeft+=evt.deltaY;
});
nextBtn.addEventListener("click",()=>{
    ScrollContainer.style.scrollBehavior ="smooth";
    ScrollContainer.scrollLeft+=900;
});
backBtn.addEventListener("click",()=>{
    ScrollContainer.style.scrollBehavior ="smooth";
    ScrollContainer.scrollLeft+=900;
});

