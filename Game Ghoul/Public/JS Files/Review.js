async function Build_Review() {
    let request = new Request("JSON Files/Review.json")
    let response = await fetch(request)
    let json_obj = await response.json()

    New_Reviews(json_obj)
    Rev_post(json_obj)
    More_Rev_post(json_obj)

}

function New_Reviews(json_obj) {
    let new_list = document.createElement("ol")
    new_list.setAttribute("class", "list")

    for (var i = 0; i < json_obj["New"].length; i++) {

        //Creating elements of new review post
        let new_rev = document.createElement("li")
        let new_link = document.createElement("a")
        let new_div = document.createElement("div")
        let new_title = document.createElement("h4")
        let new_date = document.createElement("h6")

        //Specifying element attributes from json file
        new_link.href = json_obj["New"][i]["Link"]
        new_title.innerText = json_obj["New"][i]["Title"]
        new_date.innerText = json_obj["New"][i]["Date"]

        //Adding the elements to new review post
        new_div.appendChild(new_title)
        new_div.appendChild(new_date)
        new_link.appendChild(new_div)
        new_rev.appendChild(new_link)

        //Adding the new review post to list
        new_list.appendChild(new_rev)
    }

    //Selecting new review section where the list is to be added
    const new_sec = document.querySelector("div.Rev_list")

    //Adding the list to page
    new_sec.appendChild(new_list)
}

function Rev_post(json_obj) {

    for (var i = 0; i < json_obj["Reviews"].length; i++) {

        //Creating elements of review listing
        let hr = document.createElement("hr")
        let link = document.createElement("a")
        let rev = document.createElement("div")
        let rev_image = document.createElement("div")
        let image = document.createElement("img")
        let rev_info = document.createElement("div")
        let title = document.createElement("h3")
        let desc = document.createElement("p")

        let img1 = document.createElement("img")
        let date = document.createElement("span")

        let img2 = document.createElement("img")
        let auth = document.createElement("span")

        let img3 = document.createElement("img")
        let type = document.createElement("span")

        //Specifying element attributes from json file
        link.href = json_obj["Reviews"][i]["Link"]
        image.src = json_obj["Reviews"][i]["Thumbnail"]
        title.innerText = json_obj["Reviews"][i]["Title"]
        desc.innerText = json_obj["Reviews"][i]["Description"]

        img1.src = json_obj["Reviews"][i]["Date"][0]
        date.innerText = json_obj["Reviews"][i]["Date"][1]

        img2.src = json_obj["Reviews"][i]["Author"][0]
        auth.innerText = json_obj["Reviews"][i]["Author"][1]

        img3.src = json_obj["Reviews"][i]["Type"][0]
        type.innerText = json_obj["Reviews"][i]["Type"][1]

        rev.setAttribute("class", "review")
        rev_image.setAttribute("class", "rev_image")
        rev_info.setAttribute("class", "review_info")

        //Adding the elements to review listing
        rev_image.appendChild(image)

        rev_info.appendChild(title)
        rev_info.appendChild(desc)
        rev_info.appendChild(img1)
        rev_info.appendChild(date)
        rev_info.appendChild(img2)
        rev_info.appendChild(auth)
        rev_info.appendChild(img3)
        rev_info.appendChild(type)

        rev.appendChild(rev_image)
        rev.appendChild(rev_info)

        link.appendChild(rev)

        //Selecting review body where the listing is to be added
        const rev_body = document.querySelector("div.review_body")

        //Adding the review listing to page
        rev_body.appendChild(hr)
        rev_body.appendChild(link)
        rev_body.appendChild(hr)
    }
}

function More_Rev_post(json_obj) {

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

Build_Review()