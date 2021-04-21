main()

function main() {
    getDog();
}


function getDog() {
    fetch("https://random.dog/woof.json")
        .then(response => response.json())
        .then(data => updateDogImgSrc(data.url));
}

function updateDogImgSrc(src) {
    let img = document.querySelector("img");
    img.src = src;
}