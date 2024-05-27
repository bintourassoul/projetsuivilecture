
function supprimerImage () {
    let monImage = document.getElementById('monImage');
    let nomLivre = document.getElementById('nomLivre');
    let auteurlivre = document.getElementById('AuteurLivre');
    let boutonCommander = document.getElementById('commande');
    monImage.parentNode.removeChild(monImage);
    nomLivre.parentNode.removeChild(nomLivre);
    auteurlivre.parentNode.removeChild(auteurlivre);
    boutonCommander.parentNode.removeChild(boutonCommander);
}
function deleteImage () {
    let img = document.getElementById('Image');
    let Livre = document.getElementById('Livre');
    let titre = document.getElementById('Auteur');
    let boutonCommande = document.getElementById('commander');
    img.parentNode.removeChild(img);
    Livre.parentNode.removeChild(Livre);
    titre.parentNode.removeChild(titre);
    boutonCommande.parentNode.removeChild(boutonCommande);
}
function remove () {
  let source = document.getElementById('source');
  let title = document.getElementById('title');
  let monNom = document.getElementById('monNom');
  let comade = document.getElementById('comade');
  source.parentNode.removeChild(source);
  title.parentNode.removeChild(title);
  monNom.parentNode.removeChild(monNom);
  comade.parentNode.removeChild(comade);
}



const message = document.getElementById('message');
const marqueLuBtn = document.getElementById('marqueLu');
const marqueNonLuBtn = document.getElementById('marqueNonLu');


marqueLuBtn.addEventListener('click', function() {
  message.textContent = "Ce livre est lu.";
  message.style.color = "green";
});

marqueNonLuBtn.addEventListener('click', function() {
  message.textContent = "Ce livre est non lu.";
  message.style.color = "red";
});


const messages = document.getElementById('messages');
const Lu = document.getElementById('Lu');
const NonLu = document.getElementById('NonLu');


Lu.addEventListener('click', function() {
  messages.textContent = "Ce livre est lu.";
  messages.style.color = "green";
});

NonLu.addEventListener('click', function() {
  messages.textContent = "Ce livre est non lu.";
  messages.style.color = "red";
});

const messag = document.getElementById('messag');
const Lire = document.getElementById('Lire');
const NonLire = document.getElementById('NonLire');


Lire.addEventListener('click', function() {
  messag.textContent = "Ce livre est lu.";
  messag.style.color = "green";
});

NonLire.addEventListener('click', function() {
  messag.textContent = "Ce livre est non lu.";
  messag.style.color = "red";
});



  