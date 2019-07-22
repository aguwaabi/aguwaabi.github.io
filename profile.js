$("#newprofile").submit(function (e) {
    e.preventDefault();
var name_text = document.getElementById("name_form").value;
var image_link = document.getElementById("image_form").value;
var bio_text = document.getElementById("bio_form").value;
var save = document.getElementById("savebutton").value;

document.getElementById("profile_name").innerHTML = document.getElementById("name_form").value;
document.getElementById("bio").innerHTML = document.getElementById("bio_form").value;
document.getElementById("profile_pic").src = document.getElementById("image_form").value;


});