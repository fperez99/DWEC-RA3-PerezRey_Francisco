title.innerHTML = "Pagina web de recetas";
const ol = document.createElement("ol")
document.body.appendChild(ol);

let li1 = document.createElement("li");
li1.id = "receta1";
let dl1 = document.createElement("dl");

let dl1Texto = document.createTextNode("Batimos los huevos, cortamos y freimos patatas...");
dl1.appendChild(dl1Texto);
let li1Texto = document.createTextNode("Receta de Tortilla de patatas campera");
li1.appendChild(li1Texto);

let li2 = document.createElement("li");
li2.id = "receta2";
let dl2 = document.createElement("dl");
let dl2Texto = document.createTextNode("Cortamos una barra de pan, la abrimos por la mitad e introducimos el jamón...");
dl2.appendChild(dl2Texto);
let li2Texto = document.createTextNode("Receta de Bocadillo de jamón");
li2.appendChild(li2Texto);

let li3 = document.createElement("li");
li3.id = "receta3";
let dl3 = document.createElement("dl");
let dl3Texto = document.createTextNode("Cogemos las patatas, las metemos en una cazuela con agua caliene y...");
dl3.appendChild(dl3Texto);
let li3Texto = document.createTextNode("Receta de Patatas alioli");
li3.appendChild(li3Texto);

let li4 = document.createElement("li");
li4.id = "receta4";
let dl4 = document.createElement("dl");
let dl4Texto = document.createTextNode("Cogemos un cazo, depositamos agua y añadimos un poco de aceite y sal...");
dl4.appendChild(dl4Texto);
let li4Texto = document.createTextNode("Receta de Macarrones con tomate");
li4.appendChild(li4Texto);

li1.appendChild(dl1);
ol.appendChild(li1);

li2.appendChild(dl2);
ol.appendChild(li2);

li3.appendChild(dl3);
ol.appendChild(li3);

li4.appendChild(dl4);
ol.appendChild(li4);

