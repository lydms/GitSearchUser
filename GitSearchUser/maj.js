export function displayInfoUtilisateur(utilisateur) {
    const resultatDiv = document.getElementById('resultatUtilisateur');
    const dateCreation = new Date(utilisateur.created_at);
    const jourCompte = Math.floor((Date.now() - dateCreation.getTime()) / (1000 * 60 * 60 * 24));

    resultatDiv.innerHTML = `
    <img src="${utilisateur.avatar_url}" alt="Avatar de ${utilisateur.login}">
    <h2>${utilisateur.login}</h2>
    <br>
    <p>Utilisateur créé le ${dateCreation.toLocaleDateString()}, il y a ${jourCompte} jours</p>
    <br>
    <p>Nombre de repos: ${utilisateur.public_repos}</p>
  `;

  const boutonAccesProfil = document.createElement('button')
  boutonAccesProfil.textContent = 'Voir'
  boutonAccesProfil.style.width = '200px'
  boutonAccesProfil.style.marginTop = "30px"
  boutonAccesProfil.style.padding = "10px 20px";
  boutonAccesProfil.style.backgroundColor = "#007bff";
  boutonAccesProfil.style.color = "white";
  boutonAccesProfil.style.border = "none";
  boutonAccesProfil.style.borderRadius = "20px";
  boutonAccesProfil.style.cursor = "pointer";
  
  boutonAccesProfil.onclick = () => {
      window.open(utilisateur.html_url, "_blank"); // 
  };
  
  resultatDiv.appendChild(boutonAccesProfil);
  
}

export function displayError(message) {
    const resultatDiv = document.getElementById('resultatUtilisateur');
    resultatDiv.innerHTML = `<p id="error">${message}</p>`;
}

export function clear() {
    const resultatDiv = document.getElementById('resultatUtilisateur');
    resultatDiv.innerHTML = '';
}
