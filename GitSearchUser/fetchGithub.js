export async function fetchGithubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
        const reponse = await fetch(url);
        if (!reponse.ok) {
            throw new Error(`Utilisateur non trouvé (status: ${reponse.status})`);
        }
        const data = await reponse.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
