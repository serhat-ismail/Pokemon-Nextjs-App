"use client"
import { useQuery } from "@tanstack/react-query"
import { fetchTrainer } from "../utils/http.js"
import { useSelector } from "react-redux"
import classes from "./Trainer.module.css"
import PokeBench from "./PokeBench";
import Pokemon from "./pokemon/Pokemon";

export default function Trainer({trainerId}) {
    const playerTurnId = useSelector(state => state.turn)
    const { data, isFetching, isError, error } = useQuery({
        queryKey: ["trainerData", trainerId],
        queryFn: () => fetchTrainer(trainerId),
        initialData: {}
    })

    if (isFetching) {
        return <p>Is loading ...</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    const POKEMON_COUNT = data.nmTrainerPokemons.length;
    
    return <div className={classes.trainer}>
        <div>
            <p className={classes.trainerName}>{data.name}</p>
            <PokeBench max={POKEMON_COUNT} />
            <p className={classes["center-it"]}>
                <button disabled={playerTurnId.turn !== trainerId} className={classes.pokeList}>Pokemon-List</button>
            </p>
        </div>

        <Pokemon trainerId={trainerId} activePokemon={data.nmTrainerPokemons[0]}/>
    </div>;
}