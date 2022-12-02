async function Build_Blog() {
    let request = new Request("JSON Files/Blog.json")
    let response = await fetch(request)
    let json_obj = await response.json()

    Featured_blog_post(json_obj)
    New_Posts(json_obj)
    // Blog_post(json_obj)
    More_blog_post(json_obj)
}

function New_Posts(json_obj) {
    let new_list = document.createElement("ol")
    new_list.setAttribute("class", "list")

    for (var i = 0; i < json_obj["New"].length; i++) {

        //Creating elements of new blog post
        let new_post = document.createElement("li")
        let new_link = document.createElement("a")
        let new_div = document.createElement("div")
        let new_title = document.createElement("h4")
        let new_date = document.createElement("h6")

        //Specifying element attributes from json file
        new_link.href = json_obj["New"][i]["Link"]
        new_title.innerText = json_obj["New"][i]["Title"]
        new_date.innerText = json_obj["New"][i]["Date"]

        //Adding the elements to new blog post
        new_div.appendChild(new_title)
        new_div.appendChild(new_date)
        new_link.appendChild(new_div)
        new_post.appendChild(new_link)

        //Adding the new blog post to list
        new_list.appendChild(new_post)
    }

    //Selecting new post section where the list is to be added
    const new_sec = document.querySelector("div.blog_list")

    //Adding the list to page
    new_sec.appendChild(new_list)
}

function Blog_post(json_obj) {
    for (var i = 0; i < json_obj["Posts"].length; i++) {

        //Creating elements of blog listing
        let hr = document.createElement("hr")
        let link = document.createElement("a")
        let blog = document.createElement("div")
        let blog_image = document.createElement("div")
        let image = document.createElement("img")
        let blog_info = document.createElement("div")
        let title = document.createElement("h3")
        let desc = document.createElement("p")

        let img1 = document.createElement("img")
        let date = document.createElement("span")

        let img2 = document.createElement("img")
        let auth = document.createElement("span")

        let img3 = document.createElement("img")
        let type = document.createElement("span")


        //Specifying element attributes from json file
        link.href = json_obj["Posts"][i]["Link"]
        image.src = json_obj["Posts"][i]["Thumbnail"]
        title.innerText = json_obj["Posts"][i]["Title"]
        desc.innerText = json_obj["Posts"][i]["Description"]

        img1.src = json_obj["Posts"][i]["Date"][0]
        date.innerText = json_obj["Posts"][i]["Date"][1]

        img2.src = json_obj["Posts"][i]["Author"][0]
        auth.innerText = json_obj["Posts"][i]["Author"][1]

        img3.src = json_obj["Posts"][i]["Type"][0]
        type.innerText = json_obj["Posts"][i]["Type"][1]

        blog.setAttribute("class", "blog")
        blog_image.setAttribute("class", "blog_image")
        blog_info.setAttribute("class", "blog_info")

        //Adding the elements to blog listing
        blog_image.appendChild(image)

        blog_info.appendChild(title)
        blog_info.appendChild(desc)
        blog_info.appendChild(img1)
        blog_info.appendChild(date)
        blog_info.appendChild(img2)
        blog_info.appendChild(auth)
        blog_info.appendChild(img3)
        blog_info.appendChild(type)

        blog.appendChild(blog_image)
        blog.appendChild(blog_info)

        link.appendChild(blog)

        //Selecting blog body where the listing is to be added
        const blog_body = document.querySelector("div.blog_body")

        //Adding the blog listing to page
        blog_body.appendChild(hr)
        blog_body.appendChild(link)
        blog_body.appendChild(hr)
    }
}

function More_blog_post(json_obj) {
    let br = document.createElement("br")

    //Selecting more blog body where the listing is to be added
    const more_blg_body = document.querySelector("div.more_blg")

    for (var i = 0; i < json_obj["More"].length; i++) {

        //Creating elements of more blog listing
        let more_blg = document.createElement("div")
        let more_blg_image = document.createElement("div")
        let image = document.createElement("img")
        let more_blg_info = document.createElement("div")
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

        more_blg.setAttribute("class", "blg_other")
        more_blg_image.setAttribute("class", "blg_other_img")
        more_blg_info.setAttribute("class", "blg_other_title")

        //Adding the elements to more blog listing
        more_blg_image.appendChild(image)

        more_blg_info.appendChild(title)
        more_blg_info.appendChild(img1)
        more_blg_info.appendChild(date)
        more_blg_info.appendChild(img2)
        more_blg_info.appendChild(type)

        more_blg.appendChild(more_blg_image)
        more_blg.appendChild(more_blg_info)

        //Adding the more listing to page
        more_blg_body.appendChild(more_blg)
    }
    more_blg_body.appendChild(br)
}

function Featured_blog_post(json_obj) {
    for (var i = 0; i < json_obj["Featured"].length; i++) {
        //Creating elements of featured post
        let feat_blg = document.createElement("div")
        let feat_blg_image = document.createElement("div")
        let image = document.createElement("img")
        let feat_blg_info = document.createElement("div")
        let title = document.createElement("h3")

        //Specifying element attributes from json file
        image.src = json_obj["Featured"][i]["Thumbnail"]
        title.innerText = json_obj["Featured"][i]["Title"]

        feat_blg.setAttribute("class", "blog_featured")
        feat_blg_image.setAttribute("class", "blog_featured_img")
        feat_blg_info.setAttribute("class", "blog_featured_title")

        //Adding the elements to featured blog listing
        feat_blg_image.appendChild(image)
        feat_blg_info.appendChild(title)

        feat_blg.appendChild(feat_blg_image)
        feat_blg.appendChild(feat_blg_info)

        //Selecting blog body where the listing is to be added
        const feat_blog = document.querySelector("div.featured_news")

        //Adding the featured listing to page
        feat_blog.appendChild(feat_blg)
    }

}

Build_Blog()