document.querySelector(".toggle-setting .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin")
    document.querySelector(".setting-box-open").classList.toggle(".setting-box-open");
}
const colorLis = document.querySelectorAll(".colors-list  li")
let exp = document.querySelector(".experiment")
if (window.localStorage.getItem("color")) {
    exp.style.backgroundColor = window.localStorage.getItem("color")
}
colorLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        window.localStorage.setItem("color", e.currentTarget.dataset.color)
        exp.style.backgroundColor = window.localStorage.getItem("color")
        document.documentElement.style.setProperty(`--main-color`, e.target.dataset.color)
    })
})
const RandomBackground = document.querySelectorAll("Random-backgrounds span");
RandomBackground.forEach(span => {
    span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        })
        e.target.classList.add("active")
        if(e.target.dataset.RandomBackground==="yes"){
            console.log("yes")
        }
    })
})
let randYes=document.getElementById("yes").onclick=function () {
    randombckgr=true
    randmoize()
    console.log(randombckgr)
} 
let randNo=document.getElementById("no").onclick=function () {
    randombckgr=false
   if(randombckgr===false){
       clearInterval(backgroundInterval)
    console.log(randombckgr)
   }
}

let landingPage = document.querySelector(".landing-page");
let imgArr = ["img1.jfif", "img2.jfif", "img3.jfif", "img4.jfif", "img5.jfif", "img6.jfif"]
let randombckgr = true;
let backgroundInterval;
function randmoize() {
    if (randombckgr ===true) {
       backgroundInterval=setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgArr.length)
            landingPage.style.backgroundImage = 'url(' + imgArr[randomNumber] + ')'

        }, 3000);
    }
}
randmoize();
let Scroll=document.querySelector(".up");
window.onscroll=function () {
    if(this.scrollY>=600){
        Scroll.style.opacity=0.7
    }else
         Scroll.style.opacity=1
}
Scroll.onclick=function () {
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
let ourSkills=document.querySelector(".skills");
window.onscroll=function () {
    let skillsOffsetTop=ourSkills.offsetTop;
    let skillsOuterHeight=ourSkills.offsetHeight;
    let windowHeight=window.innerHeight;
    let windowScrollTop=this.pageYOffset;
       if(windowScrollTop > skillsOffsetTop+skillsOuterHeight-windowHeight){
           let allSkills=document.querySelectorAll(".skill-box span");
               allSkills.forEach(skills=>{
                   skills.style.width=skills.dataset.progress;
               })
           }
       }    
 let ourGallery=document.querySelectorAll(".images-gallery img");
 ourGallery.forEach(img =>{
     img.addEventListener("click",(e)=>{
         let overLay=document.createElement("div")
         overLay.className="popup-overlay"
         document.body.appendChild(overLay)
         let popupBox=document.createElement("div")
         popupBox.className="popup-box"
         let popupImg=document.createElement("img")
         popupImg.src=img.src
         popupBox.appendChild(popupImg)
         document.body.appendChild(popupBox)
         if(img.alt!==null){
             let imgHeading=document.createElement("h3")
             let imgText=document.createTextNode(img.alt)
             imgHeading.appendChild(imgText)
             popupBox.appendChild(imgHeading)
             let closeButton=document.createElement("span")
             let closeButtonText=document.createTextNode("X")
             closeButton.className="close-button";
             closeButton.appendChild(closeButtonText)
             popupBox.appendChild(closeButton)

        
         }
     })
 })   
 document.addEventListener("click",function (e) {
    if(e.target.className=="close-button"){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();}
 })