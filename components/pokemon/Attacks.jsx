"use client"
import { useQuery } from "@tanstack/react-query"
import classes from "./Attacks.module.css"
import { fetchAttacks } from "@/utils/http"

export default function Attacks({trainerId, pokemonName}) {
    const { data, isFetching, isError, error } = useQuery({
        queryKey: ["attacks", pokemonName],
        queryFn: () => fetchAttacks(pokemonName),
        initialData: {
            "pokemonName": "",
            "hitRate": 0,
            "attackName": "",
            "attackType": "",
            "damage": 0,
            "concurrentDamage": 0,
            "duration": 0,
            "probability": 0,
            "attackElement": ""
          }
    })

    if (isFetching) {
        return <p>Is loading ...</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    return <div className={classes.attacks}>
        <ul>
            {data.map((pokemonAttack, index) => <li key={index}>
                <button>
                    <div className={classes.attack}>
                        <p>{pokemonAttack.attackName}</p>
                        <p>{pokemonAttack.damage}</p>
                    </div>
                </button>
            </li>)}
        </ul>
    </div>
}