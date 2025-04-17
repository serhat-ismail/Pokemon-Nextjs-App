export async function fetchTrainer(trainerId) {
    const response = await fetch(`https://localhost:7126/Trainer/GetTrainerById/${trainerId}`)
    
    if (!response.ok) {
        const error = new Error("Error occured during fetching trainer data.");
        error.code = response.status;
        error.info = response.statusText;
        throw error;
    }
    
    const trainer = await response.json();
    return trainer;
}

export async function fetchAttacks(pokemonName) {
    const response = await fetch(`https://localhost:7126/PokemonAttacksView/GetPokemonAttacks/${pokemonName}`)
    
    if (!response.ok) {
        const error = new Error("Error occured during fetching pokemon attack data.");
        error.code = response.status;
        error.info = response.statusText;
        throw error;
    }
    
    const attacks = await response.json();
    console.log(attacks)
    return attacks;
}