$("#formid").submit(function (e) {
    e.preventDefault();
    console.log("Form Submitted")
    replacingThings()
});

function replacingThings() {
console.log("Executing replacingThings()...")
        var nametext = document.getElementById("name_form").value;
        var imagelink = document.getElementById("image_form").value;
        var biotext = document.getElementById("bio_form").value;

console.log("Replacing Name")
        var name_text = document.getElementById("profile_name").innerHTML;
        var rep_name = name_text.replace(nametext);

console.log("Replacing Image")
        var image_link = document.getElementById("profile_pic").src;
        var rep_image = image_link.replace(imagelink);

console.log("Replacing Bio")
        var bio_text = document.getElementById("bio").value;
        var rep_bio = bio_text.replace(biotext);
};