//declaration de la variable "produitEnregistreDansLocalStorage"dans laquelle on met les key et les values qui sont dedans
 let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
 //---JSON.parse c'est pour convertir les données au format JSON qui sont dans le local storage en objet javaScript
 console.log(produitEnregistreDansLocalStorage);




 //selection de la claase où jr vais injecter le code html
 const positionElement = document.querySelector("acontainer-prpoduit-panier");
 console.log(positionElement)

 //si le panier est vide :afficher le panier est vide
if(produitEnregistreDansLocalStorage===null)(
console.log("je suis vide");  
)