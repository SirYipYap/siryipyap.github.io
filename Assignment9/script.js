const pokemonCache = {};

const searchBtn = document.getElementById("searchBtn");
const addToTeamBtn = document.getElementById("addToTeamBtn");
const pokemonInput = document.getElementById("pokemonInput");
const pokemonDisplay = document.getElementById("pokemonDisplay");
const moveSection = document.getElementById("moveSection");
const teamContainer = document.getElementById("teamContainer");

searchBtn.addEventListener("click", () => {

    const query = pokemonInput.value.toLowerCase().trim();
    if (!query) return;

    if (pokemonCache[query]) {
        console.log("Loaded from cache");
        displayPokemon(pokemonCache[query]);
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokemon not found");
            }
            return response.json();
        })
        .then(data => {
            pokemonCache[query] = data;
            displayPokemon(data);
        })
        .catch(error => {
            pokemonDisplay.innerHTML = "<p style='color:red;'>Pokemon not found!</p>";
            moveSection.style.display = "none";
        });
});
function displayPokemon(data) {

    pokemonDisplay.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <br>
        <audio controls>
            <source src="${data.cries.latest}" type="audio/ogg">
        </audio>
    `;

    populateMoves(data.moves);
    moveSection.style.display = "block";
}

function populateMoves(moves) {

    const dropdowns = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ];

    dropdowns.forEach(dropdown => {
        dropdown.innerHTML = "";

        moves.forEach(moveObj => {
            const option = document.createElement("option");
            option.value = moveObj.move.name;
            option.textContent = moveObj.move.name;
            dropdown.appendChild(option);
        });
    });
}

addToTeamBtn.addEventListener("click", () => {

    const nameElement = document.querySelector("#pokemonDisplay h2");
    const imageElement = document.querySelector("#pokemonDisplay img");

    if (!nameElement || !imageElement) return;

    const name = nameElement.textContent;
    const imageSrc = imageElement.src;

    const selectedMoves = [
        document.getElementById("move1").value,
        document.getElementById("move2").value,
        document.getElementById("move3").value,
        document.getElementById("move4").value
    ];

    const teamMember = document.createElement("div");
    teamMember.classList.add("team-member");

    teamMember.innerHTML = `
        <h3>${name}</h3>
        <img src="${imageSrc}">
        <p><strong>Moves:</strong></p>
        <ul>
            <li>${selectedMoves[0]}</li>
            <li>${selectedMoves[1]}</li>
            <li>${selectedMoves[2]}</li>
            <li>${selectedMoves[3]}</li>
        </ul>
    `;

    teamContainer.appendChild(teamMember);
});