//HOVER LINKS
export const headerLITags = document.querySelectorAll("#header-links > li"); 
export const activeLineHover = document.querySelectorAll(".hover-line"); 

headerLITags.forEach((li, index) => {
    li.addEventListener("mouseover", (e) => { 
        activeLineHover.forEach(hoverLine => hoverLine.classList.remove(".active-line"));
        activeLineHover[index].classList.add("active");
        li.addEventListener("mouseout", (e) => {
            activeLineHover[index].classList.remove("active");
        });
    });
});


//hamburger menu
export const headerNav = document.querySelector("#header__nav");
export const hamburgerBtn = document.querySelector("#hamburger-btn");
export const closeBtn = document.querySelector("#close-nav-btn");

//event if hambuger click show nav
hamburgerBtn.addEventListener("click", (e) => {
    headerNav.classList.add("show");
});

closeBtn.addEventListener("click", (e) => {
    headerNav.classList.remove("show");
})


window.addEventListener("resize", e => {
    if(window.innerWidth > 600) {
        headerNav.classList.remove("show");   
    }
})