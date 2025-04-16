import Image from "next/image";
import PokeballImg from "../assets/pokeball.svg"
import classes from "./PokeBench.module.css"

export default function PokeBench() {
    const POKEMON_COUNT = 6;
    const numbers = []
    for (let i = 0; i <= POKEMON_COUNT; i++) {
        numbers.push(i)
    }

    return <div className={classes.bench}>
        {numbers.map(number => <Image key={number} src={PokeballImg} />)}
    </div>;
}