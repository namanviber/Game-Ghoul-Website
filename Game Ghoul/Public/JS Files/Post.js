async function Build_Post() {
    let request = new Request("JSON Files/Post.json")
    let response = await fetch(request)
    let json_obj = await response.json()

    More_post(json_obj)
    Post_content(json_obj)
}

function Post_content(json_obj){
    const post = document.querySelectorAll("div.content p")
    for (var i = 0; i < post.length; i++){
        post[i].innerText = json_obj["Content"][i]["Text"]
    }
    const quote = document.querySelectorAll("div.content h2")
    for (var i = 0; i < quote.length; i++){
        quote[i].innerText = json_obj["Quote"][i]["Text"]
    }
}

function More_post(json_obj) {

    for (var i = 0; i < json_obj["More"].length; i++) {

        //Creating elements of more review listing
        let more_rev = document.createElement("div")
        let more_rev_image = document.createElement("div")
        let image = document.createElement("img")
        let more_rev_info = document.createElement("div")
        let title = document.createElement("h3")

        let img1 = document.createElement("img")
        let date = document.createElement("span")

        let img2 = document.createElement("img")
        let type = document.createElement("span")


        //Specifying element attributes from json file
        image.src = json_obj["More"][i]["Thumbnail"]
        title.innerText = json_obj["More"][i]["Title"]

        img1.src = json_obj["More"][i]["Date"][0]
        date.innerText = json_obj["More"][i]["Date"][1]

        img2.src = json_obj["More"][i]["Type"][0]
        type.innerText = json_obj["More"][i]["Type"][1]

        more_rev.setAttribute("class", "rev_other")
        more_rev_image.setAttribute("class", "rev_other_img")
        more_rev_info.setAttribute("class", "rev_other_title")

        //Adding the elements to more review listing
        more_rev_image.appendChild(image)

        more_rev_info.appendChild(title)
        more_rev_info.appendChild(img1)
        more_rev_info.appendChild(date)
        more_rev_info.appendChild(img2)
        more_rev_info.appendChild(type)

        more_rev.appendChild(more_rev_image)
        more_rev.appendChild(more_rev_info)

        //Selecting more review body where the listing is to be added
        const more_rev_body = document.querySelector("div.more_rev")

        //Adding the more review listing to page
        more_rev_body.appendChild(more_rev)

    }
}

Build_Post()