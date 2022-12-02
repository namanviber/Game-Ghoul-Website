async function loadProductpage() {
    let request = new Request("JSON Files/Product.json")
    let response = await fetch(request)
    let json_obj = await response.json()

    loadProductdiv(json_obj)
}

let frame_col_image = document.querySelectorAll("div.image")
let frame_col_desc = document.querySelectorAll("div.desc")

function loadProductdiv(json_obj) {
    for (i = 0; i < 9; i++) {
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
