var arrayFotos
["https://www.imagenspng.com.br/wp-content/uploads/2016/04/peppa-pig-familia-pig-01.png", "https://conteudo.imguol.com.br/c/esporte/04/2023/03/29/pepa-tecnico-do-cruzeiro-1680126353350_v2_1920x1440.jpg", "https://www.nicelembrancinhas.com.br/image/cache/catalog/PEPPA/GEORGE%2003-650x650.jpg", "https://cangurunews.com.br/old_files/PapaiPig_Peppa_2.png", "https://i.pinimg.com/originals/0f/58/bd/0f58bd5b6b5fa90ad1686485e297948d.png"]
var familiaPig = ["Familia pig", "Peppa", "Jorge", "Papai pig", "Mamãe pig"];
var i = 0;

function next() {
i++;
var membrosDaFamilia = 4;
if (i > membrosDaFamilia) {
    i = 0;
}
var pFoto = arrayFotos[i];
var pNome = familiaPig[i];
document.getElementById("membro_da_familia").src = pFoto;
document.getElementById("nome").innerHTML = pNome;
}