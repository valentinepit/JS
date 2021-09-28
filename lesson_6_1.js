

function create_element(counter) {
    const div = document.createElement('DIV')
    div.classList.add("small")
    div.id = "img_" + counter
    src = "small/boat_" + counter + ".jpg"
    div.style.backgroundImage = "url('" + src + "')";
    return div
}



function changeBigPicture(e) {
    big_pic.innerText = "";
    let img_num = e.target.id[4];
    let src = "big/boat_" + img_num + ".jpg";
    big_pic.style.backgroundImage = "url('" + src + "')";
    window.onerror = no_file();


}

for (let i = 1; i <= 3; i++) {
    let top = document.getElementById("top")
    top.appendChild(create_element(i))
}
let images = document.getElementsByClassName("small");
let big_pic = document.getElementById("big");


for (var i = 0; i < images.length; i++) {
    images[i].onclick = changeBigPicture;
}
function no_file() {
    big_pic.innerText = "NO IMG";
    big_pic.style.backgroundColor = "Yellow";
}
