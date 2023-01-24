const title = document.querySelector("h1");
title.style.textAlign = "center";
title.style.backgroundColor = "yellow";
title.style.padding = "10px";
//capturo todos los p dentro del elemento home-content .. selector descendente
const paragraphs = document.querySelectorAll(".home-content p");
//console.log(paragraphs);

for (const paragraph of paragraphs) {
    paragraph.style.backgroundColor = "blue";
    paragraph.style.padding = "15px";
    paragraph.style.color = "#fff";
    paragraph.style.lineHeight = "25px";
    paragraph.style.fontFamily = "Verdana";
}