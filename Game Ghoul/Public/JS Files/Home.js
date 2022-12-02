// Homepage

async function loadHomepage() {
    let request = new Request("JSON Files/Home.json")
    let response = await fetch(request)
    let json_obj = await response.json()

    loadGrid(json_obj)
    loadnews(json_obj)
    // loadSlides(json_obj)
}

let container = document.querySelectorAll("div.container")
let img_cont = document.querySelectorAll("div.img_cont")

function loadGrid(json_obj) {
    for (i = 0; i < 12; i++) {
        let image = document.createElement("img")
        let title = document.createElement("h2")
        let desc = document.createElement("p")
        let link = document.createElement("a")
        let anchor = document.createElement("h4")

        link.href = json_obj["items"][i]["link"]
        image.src = json_obj["items"][i]["image"]
        title.innerHTML = json_obj["items"][i]["title"]
        desc.innerHTML = json_obj["items"][i]["desc"]
        anchor.innerHTML = json_obj["items"][i]["text"]

        link.appendChild(anchor)
        container[i].appendChild(title)
        container[i].appendChild(desc)
        container[i].appendChild(link)
        img_cont[i].appendChild(image)
    }
}


function loadnews(json_obj) {
    let news_block = document.querySelectorAll("div.sub_block")
    for (i = 0; i < 4; i++) {
        let para = document.createElement("p")
        let head = document.createElement("h4")
        para.innerHTML = json_obj["newsletter"][i]["news"]
        head.innerHTML = json_obj["newsletter"][i]["headline"]
        news_block[i].appendChild(head)
        news_block[i].appendChild(para)
    }
}

// function loadSlides(json_obj) {
//     let image_slide = document.querySelectorAll("div.MySlides")
//     for (i = 0; i < 3; i++) {
//         let image = document.createElement("img")
//         image.src = json_obj["images"][i]
//         image_slide[i].appendChild(image)
//         alert("test1")
//     }
//     let slideIndex = 1;
//     showSlides(slideIndex);
// }

loadHomepage()

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}