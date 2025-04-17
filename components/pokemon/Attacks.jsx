"use client"
import { useQuery } from "@tanstack/react-query"
import classes from "./Attacks.module.css"
import { fetchAttacks } from "@/utils/http"
import { useDispatch, useSelector } from "react-redux"
import { turnActions } from "@/store/turn"
import { useEffect, useState } from "react"

export default function Attacks({ trainerId, pokemonName }) {
    const playerTurnId = useSelector(state => state.turn)
    const dispatch = useDispatch();
    const [isDisabled, setIsDisabled] = useState(playerTurnId.turn !== trainerId)

    useEffect(() => {
        setIsDisabled(playerTurnId.turn !== trainerId);
    }, [playerTurnId, trainerId]);

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

    function handleAttack(pokemonAttack) {
        dispatch(turnActions.changeTurn(trainerId))
    }

    if (isFetching) {
        return <p>Is loading ...</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    return <div className={classes.attacks}>
        <ul>
            {data.map((pokemonAttack, index) => <li key={index}>
                <button onClick={() => handleAttack(pokemonAttack)} disabled={isDisabled} className={!isDisabled ? classes.activeButton : undefined}>
                    <table>
                        <tbody>
                            <tr>
                                <td>{pokemonAttack.attackName}</td>
                                <td>{pokemonAttack.damage}</td>
                            </tr>
                        </tbody>
                    </table>
                </button>
            </li>)}
        </ul>
    </div>
}