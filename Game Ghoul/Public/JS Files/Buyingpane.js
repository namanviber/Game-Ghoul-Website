const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ref = urlParams.get('ref')

async function loadProductpage() {
    let request = new Request("JSON Files/BuyingPane.json")
    let response = await fetch(request)
    let json_obj = await response.json()

    loadProductdiv(json_obj)
    loadReview(json_obj)
}

let mySlides = document.querySelectorAll("div.mySlides")
let column = document.querySelectorAll("div.column")
let productdescription = document.querySelector("div.productdescription")
let description = document.querySelector("div.description")
let doc_title = document.querySelector("title")

function loadProductdiv(json_obj) {
    for (i = 0; i < 4; i++){
        let image = document.createElement("img")
        image.src = json_obj["item"][ref]["image"][i]
        mySlides[i].appendChild(image)
    }
    for (i = 0; i < 4; i++){
        let image = document.createElement("img")
        image.src = json_obj["item"][ref]["image"][i]
        column[i].appendChild(image)
    }
    let title = document.createElement("h2")
    let price = document.createElement("h3")
    let detail = document.createElement("h3")
    title.innerHTML = json_obj["item"][ref]["title"]
    price.innerHTML = json_obj["item"][ref]["price"]
    detail.innerHTML = json_obj["item"][ref]["detail"]
    productdescription.appendChild(title)
    productdescription.appendChild(price)
    productdescription.appendChild(detail)
    let ul = document.createElement("ul")
    for (i = 0; i < 4; i++){
        let list = document.createElement("li")
        list.innerHTML = json_obj["item"][ref]["desc"][i]
        ul.appendChild(list)
    }
    description.appendChild(ul)

}

let icon = document.querySelector("div.icon")
let name1 = document.querySelector("div.name")
let materialreview = document.querySelector("div.materialreview")

function loadReview(json_obj){
    let image = document.createElement("img")
    let name = document.createElement("h4")
    let title = document.createElement("h5")
    let review = document.createElement("p")
    image.src = json_obj["item"][ref]["review"]["image"]
    name.innerHTML = json_obj["item"][ref]["review"]["name"]
    title.innerHTML = json_obj["item"][ref]["review"]["title"]
    review.innerHTML = json_obj["item"][ref]["review"]["review"]
    icon.appendChild(image)
    name1.appendChild(name)
    materialreview.appendChild(title)
    materialreview.appendChild(review)
}
loadProductpage()

// Slider

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
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Button

function clickAlert() {
    alert("1 Item ADDED to CART");
}