$("#form_id").submit(function(e) {
    e.preventDefault();
    console.log("Form Submitted")
    putImageOnPage()
});
function putImageOnPage() {
    console.log("Executing putImageOnPage...")
    var container = "link_input";
    var x = document.getElementById("link_input").value;
    var pic = document.createElement("img");
    console.log(x);
    pic.src = x
    document.getElementById("container").appendChild(pic);
}