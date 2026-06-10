const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        btnTopo.style.display = "block";
    }else{
        btnTopo.style.display = "none";
    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const noticias = document.querySelectorAll(".news-item");

noticias.forEach(item => {

    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.03)";
        item.style.transition = "0.3s";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });

});