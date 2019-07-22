$("#formid").submit(function (e) {
    e.preventDefault();
    console.log("Form Submitted")
    postImage()
});
function postImage() {
console.log("Executing postImage()...")
    var srclink = document.getElementById("image_URL").value;
    var pic = document.createElement("img");
console.log(srclink);
    pic.src = srclink;

    var captext = document.getElementById("caption").value;
    var caption_input = document.createElement("p");
    caption_input.innerHTML= captext;
    var post = document.createElement("div");
    post.classList.add("post_look");
    post.appendChild(pic);
    post.appendChild(caption_input);
    container1.appendChild(post);

    var x = document.createElement("p");
    x.innerHTML = "x"
    x.id = "x_out"
    post.appendChild(x);

    var post_id = String(Math.random());
    post.id = post_id;
    post.addEventListener("click", function () {
        document.getElementById(post_id).remove();


    });
};










    //var captext = document.getElementById("caption").value;

//look at to-do list javascript


    //####1.) get text form the form and store it in a variable

    //####2.)|||
    //1.) want to crete an element with whitebox, image, and caption
    //2.) documet.createElement(div)
    //3.) create/set attributes for these elements
    //4.) EXTRA ----create image src
    //5.) EXTRA------create p *for the 'x'* with id
    //6.) construct the post element

    //append elements to div, then append div to container
    
    // <div class"img---">
    //<img src= "---"
    //<p> -----(for caption)</p>
    //<p>(with id)x </p>
    //</div>
  