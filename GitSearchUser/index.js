import { fetchGithubUser } from "./fetchGithub.js";
import { displayInfoUtilisateur, displayError,clear } from "./maj.js";

const form = document.getElementById('formRecherche');

form.addEventListener('submit', async (evenement) => {
    evenement.preventDefault();
    const username = document.getElementById('nomUtilisateur').value.trim();

    if (!username) {
        displayError('Veuillez entrer un nom d\'utilisateur.');
        return;
    }

    clear();

    try {
        const userData = await fetchGithubUser(username);
        displayInfoUtilisateur(userData);
    } catch (error) {
        displayError(error.message);
    }
});
