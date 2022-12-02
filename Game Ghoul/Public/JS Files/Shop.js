// SlideShow

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

//  Product Menu

async function loadProductpage() {
  let request = new Request("JSON Files/Shop.json")
  let response = await fetch(request)
  let json_obj = await response.json()

  loadProductdiv(json_obj)
  loadOffers(json_obj)
}

function loadOffers(json_obj){
  let off_button = document.querySelectorAll("div.off_button")
  for (i=0; i < 3; i++ ){
    let anchor = document.createElement("a")
    let off = document.createElement("p")
    anchor.href = json_obj["offers"]["link"][i]
    off.innerHTML = json_obj["offers"]["offer"][i]
    anchor.appendChild(off)
    off_button[i].appendChild(anchor)
  }
}

function loadRecents(json_obj){

}

function loadProductdiv(json_obj) {
  let frame_col_image = document.querySelectorAll("div.image")
  let frame_col_desc = document.querySelectorAll("div.desc")
  for (i = 0; i < 12; i++) {
    let container = document.createElement("div")
    let image = document.createElement("img")
    let title = document.createElement("h4")
    let price = document.createElement("h5")
    let desc = document.createElement("p")
    let link = document.createElement("a")
    link.href = json_obj["item"][i]["link"]
    image.src = json_obj["item"][i]["image"]
    title.innerHTML = json_obj["item"][i]["title"]
    container.appendChild(title)
    price.innerHTML = json_obj["item"][i]["price"]
    container.appendChild(price)
    desc.innerHTML = json_obj["item"][i]["desc"]
    container.appendChild(desc)
    link.appendChild(image)
    frame_col_image[i].appendChild(link)
    frame_col_desc[i].appendChild(container)

  }
}

loadProductpage()
