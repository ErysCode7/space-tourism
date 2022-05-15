//index.html
//hover
const spaceExplore = document.querySelector("#space__explore");
const exploreHover = document.querySelector("#explore-hover");

spaceExplore.addEventListener("mouseover", (e) => {
    exploreHover.classList.add("hover");

    spaceExplore.addEventListener("mouseout", (e) => {
        exploreHover.classList.remove("hover");
    })
})

// window.addEventListener("resize", e => {
//     if(window.innerHeight < 600) {
//         spaceExplore.style.top = "500px";
//     }
// })