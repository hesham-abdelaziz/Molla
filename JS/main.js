

 // show loading circle while the page is not loaded
 document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("#loader").style.visibility = "visible";
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("#loader").style.visibility = "hidden";
      document.querySelector("body").style.visibility = "visible";
      document.querySelector("body").style.overflow = "auto";
    }
  };

document.querySelector(".toggle-settings .toggle-menu").onclick = function(){
    document.querySelector(".middle-links").classList.toggle("open");

   
    // Close Menu on click on span
    
    document.querySelector(".middle-links span").onclick = function(){
    document.querySelector(".middle-links").classList.remove("open");


    }
    // Close Menu on click on links and move to the selected section
  
   let links = document.querySelectorAll(".middle-links li a");
   let linksArray = Array.from(links);

   linksArray.forEach(ele => {
    ele.addEventListener("click" , function(e){
    document.querySelector(".middle-links").classList.remove("open");
        
    })
   });
 
}

// Add active class on clicked link

let activelinks = document.querySelectorAll(".middle-links li a");
let activelinksArray = Array.from(activelinks);

activelinksArray.forEach(ele =>{
  
    ele.addEventListener("click" , function(e){
        activelinksArray.forEach(ele =>{
            ele.classList.remove("active-link");
        });
        e.currentTarget.classList.add("active-link");
        
    });

    window.addEventListener("scroll" , function(e){
       activelinksArray.forEach(ele => {

        if ( window.pageYOffset <= 0 ){  
           ele.classList.remove("active-link");     
        }
       })

    });
 
});







// Scroll to specific section on the page 
function scrollToSection(elementId){
    var element = document.getElementById(elementId);
    element.scrollIntoView({
        block:'start' , 
        behavior : 'smooth'
    })
}

// Stick navbar on scroll to specific height

window.addEventListener("scroll" , function() {
    var navbar = this.document.querySelector("#header");

    if(this.window.pageYOffset > 100){
        navbar.classList.add("stick");
    }
    else {
        navbar.classList.remove("stick");
    }
});


// Reveal element on scroll

window.addEventListener("scroll" , reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal , .reveal-right , .reveal-left ,.reveal-right-layout , .reveal-left-layout ,.zoomIn , .Slide-right , .Slide-left , .rotate , slide-zoomIn ");

    for(var i = 0; i<reveals.length;i++){
        var windowheigth = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheigth - revealpoint){
            reveals[i].classList.add("active");
        }
       else { 
        reveals[i].classList.remove("active");

       }
    }
}

// Get the list inside demo links and store it in array

let list = document.querySelectorAll(".demo-links li");
let listArray = Array.from(list);

// Get the divs inside content and store it in array
let divs = document.querySelectorAll(".images-container > div");
let divsArray = Array.from(divs);


listArray.forEach((ele) => {
    ele.addEventListener("click" , function(e){
        listArray.forEach((ele)=> {
            ele.classList.remove("active");
        
        });

        // Add active class
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) =>{
           
                div.style.display  = 'none'


            
        });
        document.querySelector(e.currentTarget.dataset.content).style.display= "inline-grid"
    });
})



// scroll to top

let scrolltop = document.querySelector(".up");
window.onscroll = function(){
    if(scrollY >= 500){
        scrolltop.classList.add("show");
    }
    else {
        scrolltop.classList.remove("show");

    }
};
scrolltop.onclick = function() {
    window.scrollTo({
        top : 0 ,
        behavior: 'smooth' 
    });
};



