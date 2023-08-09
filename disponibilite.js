export async function afficherGraphiqueDisponiblite(){

  console.log("hello");
  // Votre code ici
  // Légende qui s'affichera sur la gauche à côté de la barre horizontale
  const labels = ["Disponible", "Indisponible"];

  // Données et personnalisation du graphique
  const data = {
  labels: labels,
  datasets: [{
    label: "Disponiblité des pièces",
    data: nb_dispo,
    backgroundColor: "rgba(0, 255, 0, 1)", // couleur verte
  }],
};

  // Objet de configuration final
  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "x",
    },
  };

  // Rendu du graphique dans l'élément canvas
  const graphiqueDispo = new Chart(
    document.querySelector("#disponibilite-pieces"),
    config,
  );
  }
  // Calcul du nombre total de dispo par quantité d'étoiles attribuées
  const dispos = await fetch("http://localhost:8081/pieces").then(avis => avis.json());
  const nb_dispo = [0, 0];
  for (let piece of dispos) {
    // nb_dispo[piece.nbEtoiles - 1]++;
    // console.log(piece.disponibilite);
    piece.disponibilite ? nb_dispo[0]++ : nb_dispo[1]++
    // console.log(nb_dispo);

  }

afficherGraphiqueDisponiblite()
  // PENSER à EXPORTER / IMPORTER
